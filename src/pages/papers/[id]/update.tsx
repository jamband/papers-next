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
import styles from "./update.module.css";

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
    <div className={styles.container}>
      <h1>Update Paper</h1>
      {paperError ? (
        <FailedToFetch />
      ) : (
        <>
          {paperIsLoading ? (
            <Loading className={styles.loading} />
          ) : (
            <>
              <form className={styles.form} onSubmit={handleSubmit}>
                <FormInput
                  type="text"
                  name="title"
                  label="Title"
                  className={styles.fieldset}
                  inputClass={styles.textbox}
                  defaultValue={paper.title}
                  feedback={errors.title}
                  focus
                />
                <FormTextarea
                  name="body"
                  label="Body"
                  className={styles.fieldset}
                  inputClass={styles.textarea}
                  defaultValue={paper.body}
                  feedback={errors.body}
                />
                <FormSubmit disabled={false}>Update</FormSubmit>
              </form>
              <hr />
              <div className={styles.footer}>
                <Link href="/papers" className={styles.footerLink}>
                  ← Back to Papers
                </Link>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

Page.getLayout = (page) => <Layout title="Update Paper">{page}</Layout>;

export default Page;
