import { FormCheck } from "@/components/form-check";
import { FormInput } from "@/components/form-input";
import { FormSubmit } from "@/components/form-submit";
import { API_USER_KEY } from "@/constants/api";
import { FAILED_TO_REQUEST } from "@/constants/notification";
import { useNotificationAction } from "@/hooks/notification";
import { useRequireGuest } from "@/hooks/require";
import { IconLightBulb } from "@/icons/light-bulb";
import { Layout } from "@/layouts/layout";
import { formDataToJsonString, http } from "@/utils/http";
import Link from "next/link";
import { useRouter } from "next/router";
import type { FormEvent } from "react";
import { useState } from "react";
import { useSWRConfig } from "swr";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
  useRequireGuest();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    remember: "",
  });

  const { mutate } = useSWRConfig();
  const { push } = useRouter();
  const { notification } = useNotificationAction();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    await http("/login", {
      method: "POST",
      body: formDataToJsonString(form),
    })
      .then(async (response) => {
        if (response.status === 422) {
          setErrors((await response.json()).errors);
          return;
        }

        if (response.ok) {
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
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="email"
          label="Email"
          className="mb-5"
          inputClass="w-full border-gray-700 bg-gray-900 md:w-1/2"
          autoComplete="email"
          feedback={errors.email}
          focus
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          className="mb-5"
          inputClass="w-full border-gray-700 bg-gray-900 md:w-1/2"
          autoComplete="current-password"
          feedback={errors.password}
        />
        <FormCheck
          name="remember"
          label="Remeber me"
          className="mb-6"
          inputClass=""
          feedback={errors.remember}
        />
        <FormSubmit disabled={false}>Login</FormSubmit>
        <span className="mx-3">or</span>
        <Link href="/forgot-password">Forgot password?</Link>
      </form>
      <hr className="my-10" />
      <Link href="/admin/login">Login as administrator</Link>
      <div className="mt-2 text-amber-500">
        <IconLightBulb className="mr-0.5 h-4 w-4 align-[-0.125em]" />
        This link usually does not exist. Displayed for development environment.
      </div>
    </>
  );
};

Page.getLayout = (page) => <Layout title="Login">{page}</Layout>;

export default Page;
