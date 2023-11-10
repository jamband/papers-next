import { FormInput } from "@/components/form-input";
import { FormSubmit } from "@/components/form-submit";
import {
  FAILED_TO_REQUEST,
  NOTIFICATION_PASSWORD_RESET_LINK_SENT,
} from "@/constants/notification";
import { useNotificationAction } from "@/hooks/notification";
import { useRequireGuest } from "@/hooks/require";
import { Layout } from "@/layouts/layout";
import { formDataToJsonString, http } from "@/utils/http";
import type { FormEvent } from "react";
import { useState } from "react";
import type { PageComponent } from "./_app";
import styles from "./forgot-password.module.css";

const Page: PageComponent = () => {
  useRequireGuest();

  const [errors, setErrors] = useState({
    email: "",
  });

  const [isSend, setSend] = useState(false);
  const { notification } = useNotificationAction();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    await http("/forgot-password", {
      method: "POST",
      body: formDataToJsonString(form),
    })
      .then(async (response) => {
        if (response.status === 422) {
          setErrors((await response.json()).errors);
          return;
        }

        if (response.ok) {
          setSend(true);
          notification({ message: NOTIFICATION_PASSWORD_RESET_LINK_SENT });
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
      <h1>Forgot password</h1>
      <p>
        Forgot your password? No problem. Just let us know your email address
        and we will email you a password reset link that will allow you to
        choose a new one.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="email"
          label="Email"
          className={styles.fieldset}
          inputClass={styles.textbox}
          feedback={errors.email}
          focus
        />
        <FormSubmit disabled={isSend}>Send Email</FormSubmit>
      </form>
    </div>
  );
};

Page.getLayout = (page) => <Layout title="Forgot password">{page}</Layout>;

export default Page;
