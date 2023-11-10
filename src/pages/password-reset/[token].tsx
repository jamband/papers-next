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
import styles from "./token.module.css";

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
    <div className={styles.container}>
      <h1>Reset password</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="hidden" name="token" defaultValue={props.token} />
        <FormInput
          type="text"
          name="email"
          label="Email"
          className={styles.fieldset}
          inputClass={styles.textbox}
          feedback={errors.email || errors.token}
          focus
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          className={styles.fieldset}
          inputClass={styles.textbox}
          feedback={errors.password}
        />
        <FormInput
          type="password"
          name="password_confirmation"
          label="Confirm Password"
          className={styles.fieldset}
          inputClass={styles.textbox}
          feedback={errors.password_confirmation}
        />
        <FormSubmit disabled={false}>Reset Password</FormSubmit>
      </form>
    </div>
  );
};

Page.getLayout = (page) => <Layout title="Reset password">{page}</Layout>;

export default Page;
