import { Component } from "./component";
import type { Props } from "./types";

export const FormInput: React.FC<Props> = (props) => {
  const { errors, register, ...rest } = props;

  return (
    <Component
      className={rest.className}
      errors={errors}
      register={register}
      rest={rest}
    />
  );
};
