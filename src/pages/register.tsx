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
import { Page } from "../layouts/page";
import { http } from "../utils/http";
import type { Schema } from "../validations/auth/register";
import { schema } from "../validations/auth/register";

export default function View() {
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
      const { errors }: Record<string, string> = await res.json();
      for (const [name, message] of Object.entries(errors)) {
        setError(name as keyof Schema, { type: "server", message });
      }
      return;
    }

    if (res.ok) {
      push("/").then(() => {
        notification({ message: NOTIFICATION_VERIFICATION_LINK_SENT });
      });
    }
  };

  return (
    <Page title="Register">
      <h1 className="mb-5">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="name">Name</label>
          <input {...register("name")} type="text" id="name" />
          <FormError message={errors.name?.message} />
        </div>
        <div className="mb-5">
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="text" id="email" />
          <FormError message={errors.email?.message} />
        </div>
        <div className="mb-5">
          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <FormError message={errors.password?.message} />
        </div>
        <div className="mb-6">
          <label htmlFor="password_confirmation">Confirm Password</label>
          <input
            {...register("password_confirmation")}
            type="password"
            id="password_confimation"
          />
        </div>
        <Button type="submit" disabled={isSubmitting}>
          Reigster
        </Button>
      </form>
      <hr className="my-10" />
      <div className="flex items-center">
        <div className="mr-1">
          <IconLightBulb />
        </div>
        <div>
          If you have already registered as a user, please{" "}
          <Link href="/login">
            <a>Login from this link</a>
          </Link>
          .
        </div>
      </div>
    </Page>
  );
}
