import { useDeletePaper, usePapers } from "../../hooks/paper";
import { FailedToFetch } from "../failed-to-fetch";
import { Loading } from "../loading";
import { Component } from "./component";

export const Papers: React.FC = () => {
  const { error, isLoading, data } = usePapers();
  const { deletePaper } = useDeletePaper();

  if (error) return <FailedToFetch />;

  if (isLoading) {
    return <Loading className="flex items-center justify-center" />;
  }

  return <Component papers={data} deletePaper={deletePaper} />;
};
