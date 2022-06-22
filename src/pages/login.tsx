import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useSWRConfig } from "swr";
import { FormError } from "../components/form-error";
import { FormSubmit } from "../components/form-submit";
import { API_USER_KEY } from "../constants/api";
import { FAILED_TO_REQUEST } from "../constants/notification";
import { useForm } from "../hooks/form";
import { useNotificationAction } from "../hooks/notification";
import { useRequireGuest } from "../hooks/require";
import { IconLightBulb } from "../icons/light-bulb";
import { Layout } from "../layouts/layout";
import { setErrors } from "../utils/form";
import { http } from "../utils/http";
import type { Schema } from "../validations/auth/login";
import { label, schema } from "../validations/auth/login";

export default function Page() {
  useRequireGuest();

  const { mutate } = useSWRConfig();
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
    setFocus("email");
  }, [setFocus]);

  const onSubmit: SubmitHandler<Schema> = async (body) => {
    await http("/login", {
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
          await mutate(API_USER_KEY, undefined);
          await push("/");
          notification({ message: "Logged in successfully." });
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
      <h1 className="mb-5">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="email">{label.email}</label>
          <input
            {...register("email")}
            type="text"
            id="email"
            autoComplete="email"
          />
          <FormError>{errors.email?.message}</FormError>
        </div>
        <div className="mb-5">
          <label htmlFor="password">{label.password}</label>
          <input
            {...register("password")}
            id="password"
            type="password"
            autoComplete="current-password"
          />
          <FormError>{errors.password?.message}</FormError>
        </div>
        <div className="mb-6">
          <label htmlFor="remember_me">
            <input id="remember_me" name="remember" type="checkbox" />
            <span className="ml-2 text-sm">Remember me</span>
          </label>
        </div>
        <FormSubmit disabled={isSubmitting}>Login</FormSubmit>
        <span className="mx-3">or</span>
        <Link href="/forgot-password">Forgot password?</Link>
      </form>
      <hr className="my-10" />
      <Link href="/admin/login">Login as administrator</Link>
      <div className="mt-2 text-sm text-amber-500">
        <IconLightBulb className="mr-0.5 h-4 w-4 align-[-0.125em]" />
        This link usually does not exist. Displayed for development environment.
      </div>
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="Login">{page}</Layout>
);
