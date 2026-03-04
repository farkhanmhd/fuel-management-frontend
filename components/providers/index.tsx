import { TooltipProvider } from "../ui/tooltip";
import { TanstackProvider } from "./query-provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TanstackProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </TanstackProvider>
  );
};
