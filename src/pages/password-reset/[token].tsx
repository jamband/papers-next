import { FormInput } from "@/components/form-input";
import { FormSubmit } from "@/components/form-submit";
import { useNotificationAction } from "@/hooks/notification";
import { useRequireGuest } from "@/hooks/require";
import { Layout } from "@/layouts/layout";
import { formDataToJsonString, http } from "@/utils/http";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import type { FormEvent } from "react";
import { useState } from "react";
import type { PageComponent } from "../_app";

type Props = {
  token: string;
  email: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
  query,
}) => {
  return {
    props: {
      token: params?.token?.toString() || "",
      email: query.email?.toString() || "",
    },
  };
};

const Page: PageComponent<Props> = (props) => {
  useRequireGuest();

  const [errors, setErrors] = useState({
    token: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const { push } = useRouter();
  const { notification } = useNotificationAction();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const response = await http("/reset-password", {
      method: "POST",
      body: formDataToJsonString(form),
    });

    if (response.status === 422) {
      setErrors((await response.json()).errors);
      return;
    }

    if (response.ok) {
      await push("/login");
      notification({ message: "Your password has been reset!" });
      return;
    }
  };

  return (
    <>
      <h1 className="mb-5">Reset password</h1>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="token" defaultValue={props.token} />
        <FormInput
          type="text"
          name="email"
          label="Email"
          className="mb-5"
          inputClass="w-full border-gray-700 bg-gray-900 md:w-1/2"
          feedback={errors.email || errors.token}
          focus
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          className="mb-6"
          inputClass="w-full border-gray-700 bg-gray-900 md:w-1/2"
          feedback={errors.password}
        />
        <FormInput
          type="password"
          name="password_confirmation"
          label="Confirm Password"
          className="mb-10"
          inputClass="w-full border-gray-700 bg-gray-900 md:w-1/2"
          feedback={errors.password_confirmation}
        />
        <FormSubmit disabled={false}>Reset Password</FormSubmit>
      </form>
    </>
  );
};

Page.getLayout = (page) => <Layout title="Reset password">{page}</Layout>;

export default Page;
