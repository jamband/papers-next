import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { Button } from "../components/button";
import { FormError } from "../components/form-error";
import { NOTIFICATION_VERIFICATION_LINK_SENT } from "../constants/notification";
import { useForm } from "../hooks/form";
import { useNotificationAction } from "../hooks/notification";
import { useRequireGuest } from "../hooks/require";
import { IconLightBulb } from "../icons/light-bulb";
import { Layout } from "../layouts/layout";
import { setErrors } from "../utils/form";
import { http } from "../utils/http";
import type { Schema } from "../validations/auth/register";
import { schema } from "../validations/auth/register";

export default function Page() {
  useRequireGuest();

  const { push } = useRouter();
  const { notification } = useNotificationAction();

  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<Schema>(schema);

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  const onSubmit: SubmitHandler<Schema> = async (body) => {
    const res = await http("/register", {
      method: "POST",
      body,
    });

    if (res.status === 422) {
      const { errors } = await res.json();
      setErrors(errors, setError);
      return;
    }

    if (res.ok) {
      await push("/");
      notification({ message: NOTIFICATION_VERIFICATION_LINK_SENT });
      return;
    }
  };

  return (
    <>
      <h1 className="mb-5">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="name">Name</label>
          <input {...register("name")} type="text" id="name" />
          <FormError>{errors.name?.message}</FormError>
        </div>
        <div className="mb-5">
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="text" id="email" />
          <FormError>{errors.email?.message}</FormError>
        </div>
        <div className="mb-5">
          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <FormError>{errors.password?.message}</FormError>
        </div>
        <div className="mb-6">
          <label htmlFor="password_confirmation">Confirm Password</label>
          <input
            {...register("password_confirmation")}
            type="password"
            id="password_confimation"
          />
          <FormError>{errors.password_confirmation?.message}</FormError>
        </div>
        <Button type="submit" disabled={isSubmitting}>
          Reigster
        </Button>
      </form>
      <hr className="my-10" />
      <IconLightBulb className="mr-0.5 h-4 w-4 align-[-0.1em]" />
      If you have already registered as a user, please{" "}
      <Link href="/login">Login from this link</Link>.
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="Register">{page}</Layout>
);
