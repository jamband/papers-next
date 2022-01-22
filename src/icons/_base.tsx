type Props = {
  className?: string;
  children: React.ReactNode;
};

export const IconBase: React.VFC<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className ?? "h-5 w-5"}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    {props.children}
  </svg>
);
