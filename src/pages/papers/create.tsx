import { useRouter } from "next/router";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useSWRConfig } from "swr";
import { FormError } from "../../components/form-error";
import { FormSubmit } from "../../components/form-submit";
import { useForm } from "../../hooks/form";
import { useRequireVerified } from "../../hooks/require";
import { Layout } from "../../layouts/layout";
import { setErrors } from "../../utils/form";
import { http } from "../../utils/http";
import type { Schema } from "../../validations/paper/create";
import { schema } from "../../validations/paper/create";

export default function Page() {
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
          <input {...register("title")} id="title" type="text" />
          <FormError>{errors.title?.message}</FormError>
        </div>
        <div className="mb-6">
          <label htmlFor="body">Body</label>
          <textarea {...register("body")} id="body" />
          <FormError>{errors.body?.message}</FormError>
        </div>
        <FormSubmit disabled={isSubmitting}>Create</FormSubmit>
      </form>
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="Create New Paper">{page}</Layout>
);
