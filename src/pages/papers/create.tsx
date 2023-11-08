import { FormInput } from "@/components/form-input";
import { FormSubmit } from "@/components/form-submit";
import { FormTextarea } from "@/components/form-textarea";
import { useRequireVerified } from "@/hooks/require";
import { Layout } from "@/layouts/layout";
import { formDataToJsonString, http } from "@/utils/http";
import { useRouter } from "next/router";
import type { FormEvent } from "react";
import { useState } from "react";
import { useSWRConfig } from "swr";
import type { PageComponent } from "../_app";

const Page: PageComponent = () => {
  useRequireVerified();

  const [errors, setErrors] = useState({
    title: "",
    body: "",
  });

  const { mutate } = useSWRConfig();
  const { push } = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const response = await http("/papers", {
      method: "POST",
      body: formDataToJsonString(form),
    });

    if (response.status === 422) {
      setErrors((await response.json()).errors);
      return;
    }

    if (response.ok) {
      await mutate("/papers");
      await push("/papers");
      return;
    }
  };

  return (
    <>
      <h1 className="mb-5">Create New Paper</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="title"
          label="Title"
          className="mb-5"
          inputClass="w-full border-gray-700 bg-gray-900 md:w-1/2"
          feedback={errors.title}
          focus
        />
        <FormTextarea
          name="body"
          label="Body"
          className="mb-6"
          inputClass="w-full border-gray-700 bg-gray-900 md:w-1/2"
          feedback={errors.body}
        />
        <FormSubmit disabled={false}>Create</FormSubmit>
      </form>
    </>
  );
};

Page.getLayout = (page) => <Layout title="Create New Paper">{page}</Layout>;

export default Page;
