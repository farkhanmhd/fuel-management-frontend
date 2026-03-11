import { ViewTransitions } from "next-view-transitions";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { TooltipProvider } from "../ui/tooltip";
import { TanstackProvider } from "./query-provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NuqsAdapter>
      <TanstackProvider>
        <ViewTransitions>
          <TooltipProvider>{children}</TooltipProvider>
        </ViewTransitions>
      </TanstackProvider>
    </NuqsAdapter>
  );
};
