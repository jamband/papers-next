import { FormInput } from "@/_components/form-input";
import { FormSubmit } from "@/_components/form-submit";
import { FormTextarea } from "@/_components/form-textarea";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <form className={styles.container} onSubmit={props.action}>
    <FormInput
      type="text"
      name="title"
      label="Title"
      className={styles.fieldset}
      inputClass={styles.textbox}
      feedback={props.errors?.title}
      focus
    />
    <FormTextarea
      name="body"
      label="Body"
      className={styles.fieldset}
      inputClass={styles.textarea}
      feedback={props.errors?.body}
    />
    <FormSubmit disabled={false}>Create</FormSubmit>
  </form>
);
