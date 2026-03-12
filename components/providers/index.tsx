import { ViewTransitions } from "next-view-transitions";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { TooltipProvider } from "../ui/tooltip";
import { TanstackProvider } from "./query-provider";
import { ThemeProvider } from "./theme-provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NuqsAdapter>
      <TanstackProvider>
        <ViewTransitions>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </ViewTransitions>
      </TanstackProvider>
    </NuqsAdapter>
  );
};
