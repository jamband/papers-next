import { Notification } from "@/components/notification";
import { NotificationProvider } from "@/contexts/notification";
import { SWRConfigProvider } from "@/contexts/swr-config";
import Head from "next/head";
import { AdminFooter } from "../admin-footer";
import { AdminHeader } from "../admin-header";
import { Loading } from "../loading";
import { Title } from "../title";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <SWRConfigProvider>
      <Title title={props.title} />
      <Loading />
      <NotificationProvider>
        <div className={styles.container}>
          <AdminHeader />
          <main className={styles.main}>
            <Notification />
            {props.children}
          </main>
          <AdminFooter />
        </div>
      </NotificationProvider>
    </SWRConfigProvider>
  </>
);
