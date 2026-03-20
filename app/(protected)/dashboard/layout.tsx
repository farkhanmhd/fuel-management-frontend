import type { Metadata } from "next";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <>{children}</>;
};

export default DashboardLayout;
