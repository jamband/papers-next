import { FailedToFetch } from "@/components/failed-to-fetch";
import { FormInput } from "@/components/form-input";
import { FormSubmit } from "@/components/form-submit";
import { FormTextarea } from "@/components/form-textarea";
import { Loading } from "@/components/loading";
import { usePaper } from "@/hooks/paper";
import { useRequireVerified } from "@/hooks/require";
import { Layout } from "@/layouts/layout";
import type { PageComponent } from "@/pages/_app";
import { formDataToJsonString, http } from "@/utils/http";
import Link from "next/link";
import { useRouter } from "next/router";
import type { FormEvent } from "react";
import { useState } from "react";
import { useSWRConfig } from "swr";

const Page: PageComponent = () => {
  useRequireVerified();

  const {
    error: paperError,
    isLoading: paperIsLoading,
    data: paper,
  } = usePaper();

  const [errors, setErrors] = useState({
    title: "",
    body: "",
  });

  const { mutate } = useSWRConfig();
  const { push } = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const response = await http(`/papers/${paper.id}`, {
      method: "PUT",
      body: formDataToJsonString(form),
    });

    if (response.status === 422) {
      setErrors((await response.json()).errors);
      return;
    }

    if (response.ok) {
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
              <form onSubmit={handleSubmit}>
                <FormInput
                  type="text"
                  name="title"
                  label="Title"
                  className="mb-6"
                  inputClass="w-full border-gray-700 bg-gray-900 md:w-1/2"
                  defaultValue={paper.title}
                  feedback={errors.title}
                  focus
                />
                <FormTextarea
                  name="body"
                  label="Body"
                  className="mb-6"
                  inputClass="w-full border-gray-700 bg-gray-900 md:w-1/2"
                  defaultValue={paper.body}
                  feedback={errors.body}
                />
                <FormSubmit disabled={false}>Update</FormSubmit>
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
};

Page.getLayout = (page) => <Layout title="Update Paper">{page}</Layout>;

export default Page;
