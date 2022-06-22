import { useEffect, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { FormError } from "../components/form-error";
import { FormSubmit } from "../components/form-submit";
import {
  FAILED_TO_REQUEST,
  NOTIFICATION_PASSWORD_RESET_LINK_SENT,
} from "../constants/notification";
import { useForm } from "../hooks/form";
import { useNotificationAction } from "../hooks/notification";
import { useRequireGuest } from "../hooks/require";
import { Layout } from "../layouts/layout";
import { setErrors } from "../utils/form";
import { http } from "../utils/http";
import type { Schema } from "../validations/auth/forgot-password";
import { label, schema } from "../validations/auth/forgot-password";

export default function Page() {
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
          const { errors } = await res.json();
          setErrors(errors, setError);
          return;
        }

        if (res.ok) {
          setSend(true);
          notification({ message: NOTIFICATION_PASSWORD_RESET_LINK_SENT });
          return;
        }
      })
      .catch((error) => {
        notification({ message: FAILED_TO_REQUEST, color: "yellow" });
        console.error(error);
        return;
      });
  };

  return (
    <>
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
          <FormError>{errors.email?.message}</FormError>
        </div>
        <FormSubmit disabled={isSend || isSubmitting}>Send Email</FormSubmit>
      </form>
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="Forgot password">{page}</Layout>
);
