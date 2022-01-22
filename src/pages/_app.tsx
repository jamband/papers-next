import type { AppProps } from "next/app";
import Head from "next/head";
import { Notification } from "~/components/notification";
import { NotificationProvider } from "~/contexts/notification";
import { SWRConfigProvider } from "~/contexts/swr-config";
import { Layout } from "~/layouts/layout";
import { Loading } from "~/layouts/loading";
import "~/styles/app.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfigProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Loading />
        <NotificationProvider>
          <Notification className="mb-5" />
          <Component {...pageProps} />
        </NotificationProvider>
      </Layout>
    </SWRConfigProvider>
  );
}
