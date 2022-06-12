import type { Paper } from "../../types/paper";

export type _Props = {
  papers: Array<Paper>;
  deletePaper: (id: number) => void;
};
