import type { Metadata } from "next";
import { ProtectedLayout } from "@/components/layouts/protected-layout";

export const metadata: Metadata = {
  title: "Dashboard",
};

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <ProtectedLayout>{children}</ProtectedLayout>;
};

export default Layout;
