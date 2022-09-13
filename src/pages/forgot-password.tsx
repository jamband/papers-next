import { useEffect, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { FormError } from "~/components/form-error";
import { FormInput } from "~/components/form-input";
import { FormSubmit } from "~/components/form-submit";
import {
  FAILED_TO_REQUEST,
  NOTIFICATION_PASSWORD_RESET_LINK_SENT,
} from "~/constants/notification";
import { useForm } from "~/hooks/form";
import { useNotificationAction } from "~/hooks/notification";
import { useRequireGuest } from "~/hooks/require";
import { Layout } from "~/layouts/layout";
import { setErrors } from "~/utils/form";
import { http } from "~/utils/http";
import type { Schema } from "~/validations/auth/forgot-password";
import { label, schema } from "~/validations/auth/forgot-password";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
  useRequireGuest();

  const [isSend, setSend] = useState(false);
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
    await http("/forgot-password", {
      method: "POST",
      body,
    })
      .then(async (res) => {
        if (res.status === 422) {
          const { errors } = await res.json();
          setErrors(errors, setError);
          return;
        }

        if (res.ok) {
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
    <>
      <h1 className="mb-5">Forgot password</h1>
      <p className="mb-5">
        Forgot your password? No problem. Just let us know your email address
        and we will email you a password reset link that will allow you to
        choose a new one.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <label htmlFor="email">{label.email}</label>
          <FormInput
            id="email"
            className="w-full border-gray-700 bg-gray-900 md:w-1/2"
            type="text"
            register={register("email")}
            errors={errors.email}
          />
          <FormError>{errors.email?.message}</FormError>
        </div>
        <FormSubmit disabled={isSend || isSubmitting}>Send Email</FormSubmit>
      </form>
    </>
  );
};

Page.getLayout = (page) => <Layout title="Forgot password">{page}</Layout>;

export default Page;
