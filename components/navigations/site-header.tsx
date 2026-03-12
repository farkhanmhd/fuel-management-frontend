"use client";

import {
  SidebarLeft01FreeIcons,
  SidebarRight01FreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { LogoutDialog } from "../auth/logout-dialog";
import { ThemeToggle } from "../theme/theme-toggle";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useSidebar } from "../ui/sidebar";
import { Client } from "../utils/client";

export const SiteHeader = () => {
  const { toggleSidebar, open } = useSidebar();

  return (
    <header className="flex h-16.25 shrink-0 items-center justify-between gap-2 border-b px-4 transition-[width,height] ease-linear">
      <div className="flex items-center gap-2">
        <Button onClick={toggleSidebar} size="icon" variant="ghost">
          {open ? (
            <HugeiconsIcon
              className="size-5"
              icon={SidebarLeft01FreeIcons}
              strokeWidth={2}
            />
          ) : (
            <HugeiconsIcon
              className="size-5"
              icon={SidebarRight01FreeIcons}
              strokeWidth={2}
            />
          )}
        </Button>
        <Separator className="mr-2" orientation="vertical" />
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
