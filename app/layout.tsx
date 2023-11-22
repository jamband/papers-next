import type { Metadata } from "next";
import { Suspense } from "react";
import { APP_NAME } from "./_constants/app";
import { AuthProvider } from "./_contexts/auth";
import { NotificationProvider } from "./_contexts/notification";
import { Auth } from "./_layouts/auth";
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
        <AuthProvider>
          <Auth />
          <NotificationProvider>
            <Header />
            <main className={styles.main}>
              <Notification />
              {props.children}
            </main>
            <Footer />
          </NotificationProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
