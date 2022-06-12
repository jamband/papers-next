import { AdminFooter } from "~/layouts/admin-footer";
import { AdminHeader } from "~/layouts/admin-header";
import { Footer } from "~/layouts/footer";
import { Header } from "~/layouts/header";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className="flex min-h-screen flex-col">
    {props.isAdmin ? <AdminHeader /> : <Header />}
    <main className="container mx-auto flex-grow pt-28 pb-10">
      {props.children}
    </main>
    {props.isAdmin ? <AdminFooter /> : <Footer />}
  </div>
);
