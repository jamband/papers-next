import { Icon } from "./base";
import type { _Props } from "./base/types";

export const IconClock: React.FC<_Props> = (props) => (
  <Icon className={props.className} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
      clipRule="evenodd"
    />
  </Icon>
);
