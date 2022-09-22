import Head from "next/head";
import { Notification } from "~/components/notification";
import { NotificationProvider } from "~/contexts/notification";
import { SWRConfigProvider } from "~/contexts/swr-config";
import { AdminFooter } from "../admin-footer";
import { AdminHeader } from "../admin-header";
import { Loading } from "../loading";
import { Title } from "../title";
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
        <div className="flex min-h-screen flex-col">
          <AdminHeader />
          <main className="container mx-auto grow pt-28 pb-10">
            <Notification className="mb-5" />
            {props.children}
          </main>
          <AdminFooter />
        </div>
      </NotificationProvider>
    </SWRConfigProvider>
  </>
);
