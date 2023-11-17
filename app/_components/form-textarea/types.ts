export type Props = {
  name: string;
  label: string;
  className?: string;
  inputClass: string;
  feedback: string | undefined;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
};

export type _Props = Props & {
  id: string;
};
