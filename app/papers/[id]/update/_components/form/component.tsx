import { Loading } from "@/_components/loading";
import type { _Props } from "./types";
import styles from "./styles.module.css";
import { FailedToFetch } from "@/_components/failed-to-fetch";
import { FormInput } from "@/_components/form-input";
import { FormTextarea } from "@/_components/form-textarea";
import { FormSubmit } from "@/_components/form-submit";
import Link from "next/link";

export const Component: React.FC<_Props> = (props) => (
  <>
    {props.paper === undefined ? (
      <Loading className={styles.loading} />
    ) : props.paper === null ? (
      <FailedToFetch />
    ) : (
      <>
        <form className={styles.container} onSubmit={props.action}>
          <FormInput
            type="text"
            name="title"
            label="Title"
            className={styles.fieldset}
            inputClass={styles.textbox}
            defaultValue={props.paper.title}
            feedback={props.errors?.title}
            focus
          />
          <FormTextarea
            name="body"
            label="Body"
            className={styles.fieldset}
            inputClass={styles.textarea}
            defaultValue={props.paper.body}
            feedback={props.errors?.body}
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
);
