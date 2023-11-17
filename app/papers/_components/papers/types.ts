import type { usePapers } from "@/papers/_hooks";

export type Props = {
  //
};

export type _Props = Props & {
  papers?: ReturnType<typeof usePapers>["papers"];
  deletePaper: (id: number) => void;
};
