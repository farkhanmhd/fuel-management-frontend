import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Suspense } from "react";
import { TooltipProvider } from "../ui/tooltip";
import { AuthProvider } from "./auth-provider";
import { TanstackProvider } from "./query-provider";
import { ThemeProvider } from "./theme-provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NuqsAdapter>
      <TanstackProvider>
        <Suspense>
          <AuthProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <TooltipProvider>{children}</TooltipProvider>
            </ThemeProvider>
          </AuthProvider>
        </Suspense>
      </TanstackProvider>
    </NuqsAdapter>
  );
};
