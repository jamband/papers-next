import { useEffect, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { Button } from "../components/button";
import { FormError } from "../components/form-error";
import {
  FAILED_TO_REQUEST,
  NOTIFICATION_PASSWORD_RESET_LINK_SENT,
} from "../constants/notification";
import { useForm } from "../hooks/form";
import { useNotificationAction } from "../hooks/notification";
import { useRequireGuest } from "../hooks/require";
import { Page } from "../layouts/page";
import { http } from "../utils/http";
import type { Schema } from "../validations/auth/forgot-password";
import { label, schema } from "../validations/auth/forgot-password";

export default function View() {
  useRequireGuest();

  const [isSend, setSend] = useState(false);
  const { notification } = useNotificationAction();

  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<Schema>(schema);

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const onSubmit: SubmitHandler<Schema> = async (body) => {
    await http("/forgot-password", {
      method: "POST",
      body,
    })
      .then(async (res) => {
        if (res.status === 422) {
          const { errors }: Record<string, string> = await res.json();
          for (const [name, message] of Object.entries(errors)) {
            setError(name as keyof Schema, { type: "server", message });
          }
        }

        if (res.ok) {
          setSend(true);
          notification({ message: NOTIFICATION_PASSWORD_RESET_LINK_SENT });
        }
      })
      .catch((error) => {
        notification({ message: FAILED_TO_REQUEST, color: "yellow" });
        console.error(error);
      });
  };

  return (
    <Page title="Forgot password">
      <h1 className="mb-5">Forgot password</h1>
      <p className="mb-5">
        Forgot your password? No problem. Just let us know your email address
        and we will email you a password reset link that will allow you to
        choose a new one.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <label htmlFor="email">{label.email}</label>
          <input {...register("email")} type="text" id="email" />
          <FormError message={errors.email?.message} />
        </div>
        <Button type="submit" disabled={isSend || isSubmitting}>
          Send Email
        </Button>
      </form>
    </Page>
  );
}
