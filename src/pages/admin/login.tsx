import { FormCheck } from "@/components/form-check";
import { FormInput } from "@/components/form-input";
import { FormSubmit } from "@/components/form-submit";
import { API_USER_KEY } from "@/constants/api";
import { useNotificationAction } from "@/hooks/notification";
import { useRequireGuest } from "@/hooks/require";
import { IconLightBulb } from "@/icons/light-bulb";
import { Layout } from "@/layouts/layout";
import { formDataToJsonString, http } from "@/utils/http";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, type FormEvent } from "react";
import { useSWRConfig } from "swr";
import type { PageComponent } from "../_app";

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

    const response = await http("/admin/login", {
      method: "POST",
      body: formDataToJsonString(form),
    });

    if (response.status === 422) {
      setErrors((await response.json()).errors);
      return;
    }

    if (response.ok) {
      await mutate(API_USER_KEY, undefined);
      await push("/admin");
      notification({ message: "Logged in successfully." });
      return;
    }
  };

  return (
    <>
      <h1 className="mb-5">
        Login <span className="text-base text-gray-400">as administrator</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
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
        <span className="ml-3">as</span>{" "}
        <span className="ml-1">administrator</span>
      </form>
      <hr className="my-10" />
      <Link href="/login">Login as regular user</Link>
      <div className="mt-2 text-amber-500">
        <IconLightBulb className="mr-0.5 h-4 w-4 align-[-0.125em]" />
        This is a login link for regular users.
      </div>
    </>
  );
};

Page.getLayout = (page) => (
  <Layout title="Login as administrator">{page}</Layout>
);

export default Page;
