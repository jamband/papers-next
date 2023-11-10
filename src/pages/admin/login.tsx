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
    <div className={styles.container}>
      <h1>
        Login <span className={styles.titleSuffix}>as administrator</span>
      </h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <FormInput
          type="email"
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
          as administrator
        </div>
      </form>
      <hr />
      <div className={styles.footer}>
        <Link href="/login">Login as regular user</Link>
        <div className={styles.footerDescription}>
          <IconLightBulb className={styles.footerIcon} />
          This is a login link for regular users.
        </div>
      </div>
    </div>
  );
};

Page.getLayout = (page) => (
  <Layout title="Login as administrator">{page}</Layout>
);

export default Page;
