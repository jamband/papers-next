import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { FormError } from "~/components/form-error";
import { FormInput } from "~/components/form-input";
import { FormSubmit } from "~/components/form-submit";
import { useForm } from "~/hooks/form";
import { useNotificationAction } from "~/hooks/notification";
import { useRequireGuest } from "~/hooks/require";
import { Layout } from "~/layouts/layout";
import { setErrors } from "~/utils/form";
import { http } from "~/utils/http";
import type { Schema } from "~/validations/auth/reset-password";
import { label, schema } from "~/validations/auth/reset-password";
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
          <FormInput
            id="email"
            className="w-full border-gray-700 bg-gray-900 md:w-1/2"
            type="text"
            defaultValue={props.email}
            register={register("email")}
            errors={errors.email || errors.token}
          />
          <FormError>
            {errors.email?.message || errors.token?.message}
          </FormError>
        </div>
        <div className="mb-6">
          <label htmlFor="password">{label.password}</label>
          <FormInput
            id="password"
            className="w-full border-gray-700 bg-gray-900 md:w-1/2"
            type="password"
            register={register("password")}
            errors={errors.password}
          />
          <FormError>{errors.password?.message}</FormError>
        </div>
        <div className="mb-10">
          <label htmlFor="password_confirmation">
            {label.password_confirmation}
          </label>
          <FormInput
            type="password"
            className="w-full border-gray-700 bg-gray-900 md:w-1/2"
            id="password_confirmation"
            register={register("password_confirmation")}
            errors={errors.password_confirmation}
          />
          <FormError>{errors.password_confirmation?.message}</FormError>
        </div>
        <FormSubmit disabled={isSubmitting}>Reset Password</FormSubmit>
      </form>
    </>
  );
};

Page.getLayout = (page) => <Layout title="Reset password">{page}</Layout>;

export default Page;
