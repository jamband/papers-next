export type Props = {
  className?: string;
};

export type _Props = Props & {
  message: string;
  clear: () => void;
  color?: "green" | "yellow";
};
