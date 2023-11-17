import type { Metadata } from "next";
import { Suspense } from "react";
import { APP_NAME } from "./_constants/app";
import { NotificationProvider } from "./_contexts/notification";
import { Footer } from "./_layouts/footer";
import { Header } from "./_layouts/header";
import { Loading } from "./_layouts/loading";
import { Notification } from "./_layouts/notification";
import "./_styles/app.css";
import styles from "./layout.module.css";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s ･ ${APP_NAME}`,
  },
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body className={styles.container}>
        <Suspense fallback={null}>
          <Loading />
        </Suspense>
        <NotificationProvider>
          <Header />
          <main className={styles.main}>
            <Notification />
            {props.children}
          </main>
          <Footer />
        </NotificationProvider>
      </body>
    </html>
  );
}
