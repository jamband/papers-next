export type Props = {
  type: "button" | "submit";
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
};

export type _Props = Props;
