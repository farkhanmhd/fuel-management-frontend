"use client";

import { useSyncExternalStore } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { LogoutDialog } from "../auth/logout-dialog";
import { ThemeToggle } from "../theme/theme-toggle";
import { Separator } from "../ui/separator";
import { Client } from "../utils/client";
import { SidebarTrigger } from "./sidebar-trigger";

const subscribeToTitle = (callback: () => void) => {
  const observer = new MutationObserver(callback);
  observer.observe(document.head, { childList: true, subtree: true });
  return () => observer.disconnect();
};

const getTitle = () => document.title;
const getServerSnapshot = () => "";

const useDocumentTitle = () =>
  useSyncExternalStore(subscribeToTitle, getTitle, getServerSnapshot);

export const SiteHeader = () => {
  const isMobile = useIsMobile();
  const title = useDocumentTitle();

  return (
    <header className="flex h-16.25 shrink-0 items-center justify-between gap-2 px-4 transition-[width,height] ease-linear">
      <div className="flex items-center gap-2">
        {isMobile && (
          <>
            <SidebarTrigger />
            <Separator className="mr-2" orientation="vertical" />
          </>
        )}
        <span className="font-medium text-lg text-primary">{title}</span>
      </div>
      <div className="flex items-center gap-2">
        <Client>
          <ThemeToggle />
        </Client>
        <LogoutDialog />
      </div>
    </header>
  );
};
