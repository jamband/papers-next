import { FailedToFetch } from "@/_components/failed-to-fetch";
import { FormInformation } from "@/_components/form/information";
import { FormInput } from "@/_components/form/input";
import { FormSubmit } from "@/_components/form/submit";
import { FormTextarea } from "@/_components/form/textarea";
import { Loading } from "@/_components/loading";
import Link from "next/link";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    {props.paper === undefined ? (
      <Loading className={styles.loading} />
    ) : props.paper === null ? (
      <FailedToFetch />
    ) : (
      <>
        <form className={styles.container} onSubmit={props.action}>
          <FormInformation className={styles.information} />
          <FormInput
            type="text"
            name="title"
            label="Title"
            className={styles.fieldset}
            inputClass={styles.textbox}
            defaultValue={props.paper.title}
            feedback={props.errors?.title}
            required
            focus
          />
          <FormTextarea
            name="body"
            label="Body"
            className={styles.fieldset}
            inputClass={styles.textarea}
            defaultValue={props.paper.body}
            feedback={props.errors?.body}
            required
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
