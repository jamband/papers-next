import { useRouter } from "next/router";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useSWRConfig } from "swr";
import { Button } from "../../components/button";
import { FormError } from "../../components/form-error";
import { useForm } from "../../hooks/form";
import { useRequireVerified } from "../../hooks/require";
import { Layout } from "../../layouts/layout";
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
      const { errors }: Record<string, string> = await res.json();
      for (const [name, message] of Object.entries(errors)) {
        setError(name as keyof Schema, { type: "server", message });
      }
      return;
    }

    if (res.ok) {
      mutate("/papers").then(() => {
        push("/papers");
      });
    }
  };

  return (
    <>
      <h1 className="mb-5">Create New Paper</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="title">Title</label>
          <input {...register("title")} id="title" type="text" />
          <FormError message={errors.title?.message} />
        </div>
        <div className="mb-6">
          <label htmlFor="body">Body</label>
          <textarea {...register("body")} id="body" />
          <FormError message={errors.body?.message} />
        </div>
        <Button type="submit" disabled={isSubmitting}>
          Create
        </Button>
      </form>
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="Create New Paper">{page}</Layout>
);
