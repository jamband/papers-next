import { useDeletePaper, usePapers } from "@/_hooks/paper";
import { FailedToFetch } from "../failed-to-fetch";
import { Loading } from "../loading";
import { Component } from "./component";
import styles from "./styles.module.css";

export const Papers: React.FC = () => {
  const { error, isLoading, data } = usePapers();
  const { deletePaper } = useDeletePaper();

  if (error) return <FailedToFetch />;

  if (isLoading) {
    return <Loading className={styles.loading} />;
  }

  return <Component papers={data} deletePaper={deletePaper} />;
};
