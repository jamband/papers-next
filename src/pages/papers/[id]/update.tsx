import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useSWRConfig } from "swr";
import { Button } from "../../../components/button";
import { FailedToFetch } from "../../../components/failed-to-fetch";
import { FormError } from "../../../components/form-error";
import { Loading } from "../../../components/loading";
import { useForm } from "../../../hooks/form";
import { usePaper } from "../../../hooks/paper";
import { useRequireVerified } from "../../../hooks/require";
import { Layout } from "../../../layouts/layout";
import { setErrors } from "../../../utils/form";
import { http } from "../../../utils/http";
import type { Schema } from "../../../validations/paper/update";
import { schema } from "../../../validations/paper/update";

export default function Page() {
  useRequireVerified();

  const {
    error: paperError,
    isLoading: paperIsLoading,
    data: paper,
  } = usePaper();

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
    if (paperError || paperIsLoading) return;
    setFocus("title");
  }, [paperError, paperIsLoading, setFocus]);

  const onSubmit: SubmitHandler<Schema> = async (body) => {
    const res = await http(`/papers/${paper.id}`, {
      method: "PUT",
      body,
    });

    if (res.status === 422) {
      const { errors } = await res.json();
      setErrors(errors, setError);
      return;
    }

    if (res.ok) {
      await mutate(`/papers/${paper.id}`);
      await push(`/papers/${paper.id}`);
      return;
    }
  };

  return (
    <>
      <h1 className="mb-5">Update Paper</h1>
      {paperError ? (
        <FailedToFetch />
      ) : (
        <>
          {paperIsLoading ? (
            <Loading className="flex items-center justify-center" />
          ) : (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                  <label htmlFor="title">Title</label>
                  <input
                    {...register("title")}
                    id="title"
                    type="text"
                    defaultValue={paper.title}
                  />
                  <FormError>{errors.title?.message}</FormError>
                </div>
                <div className="mb-6">
                  <label htmlFor="body">Body</label>
                  <textarea
                    {...register("body")}
                    id="body"
                    defaultValue={paper.body}
                  />
                  <FormError>{errors.body?.message}</FormError>
                </div>
                <Button type="submit" disabled={isSubmitting}>
                  Update
                </Button>
              </form>
              <hr className="mt-4" />
              <div className="mt-10 text-center md:mt-20">
                <Link href="/papers" className="p-3">
                  ← Back to Papers
                </Link>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="Update Paper">{page}</Layout>
);
