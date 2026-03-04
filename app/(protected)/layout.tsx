import { ProtectedLayout } from "@/components/layouts/protected-layout";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <ProtectedLayout>{children}</ProtectedLayout>;
};

export default Layout;
