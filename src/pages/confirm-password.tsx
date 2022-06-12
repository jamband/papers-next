import { useRouter } from "next/router";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { Button } from "../components/button";
import { FormError } from "../components/form-error";
import { NOTIFICATION_TOO_MANY_REQUEST } from "../constants/notification";
import { useForm } from "../hooks/form";
import { useNotificationAction } from "../hooks/notification";
import { useRequireVerified } from "../hooks/require";
import { Layout } from "../layouts/layout";
import { http } from "../utils/http";
import type { Schema } from "../validations/auth/confirm-password";
import { label, schema } from "../validations/auth/confirm-password";

export default function Page() {
  useRequireVerified();

  const { back } = useRouter();
  const { notification } = useNotificationAction();

  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<Schema>(schema);

  useEffect(() => {
    setFocus("password");
  }, [setFocus]);

  const onSubmit: SubmitHandler<Schema> = async (body) => {
    const res = await http("/confirm-password", {
      method: "POST",
      body,
    });

    if (res.status === 422) {
      const { errors }: Record<string, string> = await res.json();
      for (const [name, message] of Object.entries(errors)) {
        setError(name as keyof Schema, { type: "server", message });
      }
      return;
    }

    if (res.status === 429) {
      notification({ message: NOTIFICATION_TOO_MANY_REQUEST, color: "yellow" });
      return;
    }

    if (res.ok) back();
  };

  return (
    <>
      <h1 className="mb-5">Confirm your password</h1>
      <p className="mb-5">
        This is a secure area of the application. Please confirm your password
        before continuing.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="password">{label.password}</label>
          <input {...register("password")} type="password" id="password" />
          <FormError message={errors.password?.message} />
        </div>
        <Button type="submit" disabled={isSubmitting}>
          Confirm
        </Button>
      </form>
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="Confirm your password">{page}</Layout>
);
