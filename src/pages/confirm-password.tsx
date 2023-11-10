import { FormInput } from "@/components/form-input";
import { FormSubmit } from "@/components/form-submit";
import { NOTIFICATION_TOO_MANY_REQUEST } from "@/constants/notification";
import { useNotificationAction } from "@/hooks/notification";
import { useRequireVerified } from "@/hooks/require";
import { Layout } from "@/layouts/layout";
import { formDataToJsonString, http } from "@/utils/http";
import { useRouter } from "next/router";
import type { FormEvent } from "react";
import { useState } from "react";
import type { PageComponent } from "./_app";
import styles from "./confirm-password.module.css";

const Page: PageComponent = () => {
  useRequireVerified();

  const [errors, setErrors] = useState({
    password: "",
  });

  const { back } = useRouter();
  const { notification } = useNotificationAction();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const response = await http("/confirm-password", {
      method: "POST",
      body: formDataToJsonString(form),
    });

    if (response.status === 422) {
      setErrors((await response.json()).errors);
      return;
    }

    if (response.status === 429) {
      notification({ message: NOTIFICATION_TOO_MANY_REQUEST, color: "yellow" });
      return;
    }

    if (response.ok) {
      back();
    }
  };

  return (
    <div className={styles.container}>
      <h1>Confirm your password</h1>
      <p>
        This is a secure area of the application. Please confirm your password
        before continuing.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <FormInput
          type="password"
          name="password"
          label="Password"
          className={styles.fieldset}
          inputClass={styles.textbox}
          feedback={errors.password}
          focus
        />
        <FormSubmit disabled={false}>Confirm</FormSubmit>
      </form>
    </div>
  );
};

Page.getLayout = (page) => (
  <Layout title="Confirm your password">{page}</Layout>
);

export default Page;
