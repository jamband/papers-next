export type Props = {
  type: "button" | "submit";
  color?: "green" | "red";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

export type _Props = Props;
