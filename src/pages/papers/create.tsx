import { useRouter } from "next/router";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useSWRConfig } from "swr";
import { FormError } from "~/components/form-error";
import { FormInput } from "~/components/form-input";
import { FormSubmit } from "~/components/form-submit";
import { FormTextarea } from "~/components/form-textarea";
import { useForm } from "~/hooks/form";
import { useRequireVerified } from "~/hooks/require";
import { Layout } from "~/layouts/layout";
import { setErrors } from "~/utils/form";
import { http } from "~/utils/http";
import type { Schema } from "~/validations/paper/create";
import { schema } from "~/validations/paper/create";
import type { PageComponent } from "../_app";

const Page: PageComponent = () => {
  useRequireVerified();

  const { mutate } = useSWRConfig();
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<Schema>(schema);

  useEffect(() => {
    setFocus("title");
  }, [setFocus]);

  const onSubmit: SubmitHandler<Schema> = async (body) => {
    const res = await http("/papers", {
      method: "POST",
      body,
    });

    if (res.status === 422) {
      const { errors } = await res.json();
      setErrors(errors, setError);
      return;
    }

    if (res.ok) {
      await mutate("/papers");
      await push("/papers");
      return;
    }
  };

  return (
    <>
      <h1 className="mb-5">Create New Paper</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="title">Title</label>
          <FormInput
            id="title"
            className="w-full border-gray-700 bg-gray-900 md:w-1/2"
            type="text"
            register={register("title")}
            errors={errors.title}
          />
          <FormError>{errors.title?.message}</FormError>
        </div>
        <div className="mb-6">
          <label htmlFor="body">Body</label>
          <FormTextarea
            id="body"
            className="w-full border-gray-700 bg-gray-900 md:w-1/2"
            register={register("body")}
            errors={errors.body}
          />
          <FormError>{errors.body?.message}</FormError>
        </div>
        <FormSubmit disabled={isSubmitting}>Create</FormSubmit>
      </form>
    </>
  );
};

Page.getLayout = (page) => <Layout title="Create New Paper">{page}</Layout>;

export default Page;
