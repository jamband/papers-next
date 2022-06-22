import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { FormError } from "../../components/form-error";
import { FormSubmit } from "../../components/form-submit";
import { useForm } from "../../hooks/form";
import { useNotificationAction } from "../../hooks/notification";
import { useRequireGuest } from "../../hooks/require";
import { Layout } from "../../layouts/layout";
import { setErrors } from "../../utils/form";
import { http } from "../../utils/http";
import type { Schema } from "../../validations/auth/reset-password";
import { label, schema } from "../../validations/auth/reset-password";

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

export default function Page(props: Props) {
  useRequireGuest();

  const { push } = useRouter();
  const { notification } = useNotificationAction();

  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<Schema>(schema);

  useEffect(() => {
    setFocus("password");
  }, [setFocus]);

  const onSubmit: SubmitHandler<Schema> = async (body) => {
    const res = await http("/reset-password", {
      method: "POST",
      body,
    });

    if (res.status === 422) {
      const { errors } = await res.json();
      setErrors(errors, setError);
      return;
    }

    if (res.ok) {
      await push("/login");
      notification({ message: "Your password has been reset!" });
      return;
    }
  };

  return (
    <>
      <h1 className="mb-5">Reset password</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="hidden"
          {...register("token")}
          defaultValue={props.token}
        />
        <div className="mb-6">
          <label htmlFor="email">{label.email}</label>
          <input
            {...register("email")}
            type="text"
            id="email"
            defaultValue={props.email}
          />
          <FormError>
            {errors.email?.message || errors.token?.message}
          </FormError>
        </div>
        <div className="mb-6">
          <label htmlFor="password">{label.password}</label>
          <input {...register("password")} type="password" id="password" />
          <FormError>{errors.password?.message}</FormError>
        </div>
        <div className="mb-10">
          <label htmlFor="password_confirmation">
            {label.password_confirmation}
          </label>
          <input
            {...register("password_confirmation")}
            type="password"
            id="password_confirmation"
          />
          <FormError>{errors.password_confirmation?.message}</FormError>
        </div>
        <FormSubmit disabled={isSubmitting}>Reset Password</FormSubmit>
      </form>
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="Reset password">{page}</Layout>
);
