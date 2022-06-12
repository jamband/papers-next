import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useSWRConfig } from "swr";
import { Button } from "../../components/button";
import { FormError } from "../../components/form-error";
import { API_USER_KEY } from "../../constants/api";
import { useForm } from "../../hooks/form";
import { useNotificationAction } from "../../hooks/notification";
import { useRequireGuest } from "../../hooks/require";
import { IconLightBulb } from "../../icons/light-bulb";
import { Page } from "../../layouts/page";
import { http } from "../../utils/http";
import type { Schema } from "../../validations/admin/login";
import { label, schema } from "../../validations/admin/login";

export default function View() {
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
    const res = await http("/admin/login", {
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
      mutate(API_USER_KEY, undefined).then(() => {
        push("/admin").then(() => {
          notification({ message: "Logged in successfully." });
        });
      });
    }
  };

  return (
    <Page title="Login">
      <h1 className="mb-5">
        Login <span className="text-base text-gray-400">as administrator</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="email">{label.email}</label>
          <input
            {...register("email")}
            type="text"
            id="email"
            autoComplete="email"
          />
          <FormError message={errors.email?.message} />
        </div>
        <div className="mb-5">
          <label htmlFor="password">{label.password}</label>
          <input
            {...register("password")}
            id="password"
            type="password"
            autoComplete="current-password"
          />
          <FormError message={errors.password?.message} />
        </div>
        <div className="mb-6">
          <label htmlFor="remember_me">
            <input id="remember_me" name="remember" type="checkbox" />
            <span className="ml-2 text-sm">Remember me</span>
          </label>
        </div>
        <Button type="submit" disabled={isSubmitting}>
          Login
        </Button>
        <span className="ml-3">as</span>{" "}
        <span className="ml-1">administrator</span>
      </form>
      <hr className="my-10" />
      <Link href="/login">Login as regular user</Link>
      <div className="mt-2 flex items-center text-sm text-amber-500">
        <IconLightBulb className="mr-0.5 h-4 w-4 align-[-0.125em]" />
        This is a login link for regular users.
      </div>
    </Page>
  );
}
