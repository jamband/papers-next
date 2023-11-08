import { FormInput } from "@/components/form-input";
import { FormSubmit } from "@/components/form-submit";
import { NOTIFICATION_VERIFICATION_LINK_SENT } from "@/constants/notification";
import { useNotificationAction } from "@/hooks/notification";
import { useRequireGuest } from "@/hooks/require";
import { IconLightBulb } from "@/icons/light-bulb";
import { Layout } from "@/layouts/layout";
import { formDataToJsonString, http } from "@/utils/http";
import Link from "next/link";
import { useRouter } from "next/router";
import type { FormEvent } from "react";
import { useState } from "react";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
  useRequireGuest();

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password_cofirmation: "",
  });

  const { push } = useRouter();
  const { notification } = useNotificationAction();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const response = await http("/register", {
      method: "POST",
      body: formDataToJsonString(form),
    });

    if (response.status === 422) {
      setErrors((await response.json()).errors);
      return;
    }

    if (response.ok) {
      await push("/");
      notification({ message: NOTIFICATION_VERIFICATION_LINK_SENT });
      return;
    }
  };

  return (
    <>
      <h1 className="mb-5">Register</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          label="Name"
          className="mb-5"
          inputClass="w-full border-gray-700 bg-gray-900 md:w-1/2"
          feedback={errors.name}
          focus
        />
        <FormInput
          type="text"
          name="email"
          label="Email"
          className="mb-5"
          inputClass="w-full border-gray-700 bg-gray-900 md:w-1/2"
          feedback={errors.email}
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
        <FormInput
          type="password"
          name="password_confirmation"
          label="Confirm Password"
          className="mb-5"
          inputClass="w-full border-gray-700 bg-gray-900 md:w-1/2"
          feedback={errors.password_cofirmation}
        />
        <FormSubmit disabled={false}>Reigster</FormSubmit>
      </form>
      <hr className="my-10" />
      <IconLightBulb className="mr-0.5 h-4 w-4 align-[-0.1em]" />
      If you have already registered as a user, please{" "}
      <Link href="/login">Login from this link</Link>.
    </>
  );
};

Page.getLayout = (page) => <Layout title="Register">{page}</Layout>;

export default Page;
