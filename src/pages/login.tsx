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
import styles from "./login.module.css";

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
    <div className={styles.container}>
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="email"
          label="Email"
          className={styles.fieldset}
          inputClass={styles.textbox}
          autoComplete="email"
          feedback={errors.email}
          focus
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          className={styles.fieldset}
          inputClass={styles.textbox}
          autoComplete="current-password"
          feedback={errors.password}
        />
        <FormCheck
          name="remember"
          label="Remeber me"
          className={styles.fieldset}
          feedback={errors.remember}
        />
        <div className={styles.login}>
          <FormSubmit disabled={false}>Login</FormSubmit>
          or
          <Link href="/forgot-password">Forgot password?</Link>
        </div>
      </form>
      <hr />
      <div className={styles.footer}>
        <Link href="/admin/login">Login as administrator</Link>
        <div className={styles.footerDescription}>
          <IconLightBulb className={styles.footerIcon} />
          This link usually does not exist. Displayed for development
          environment.
        </div>
      </div>
    </div>
  );
};

Page.getLayout = (page) => <Layout title="Login">{page}</Layout>;

export default Page;
