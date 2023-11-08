export type Props = {
  name: string;
  className?: string;
  label: string;
  inputClass: string;
  feedback: string | undefined;
  defaultChecked?: boolean;
};

export type _Props = Props & {
  id: string;
};
