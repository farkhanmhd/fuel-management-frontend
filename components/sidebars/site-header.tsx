"use client";

import {
  PowerOff,
  SidebarLeft01FreeIcons,
  SidebarRight01FreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useSidebar } from "../ui/sidebar";

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
      <Button size="icon" variant="ghost">
        <HugeiconsIcon className="size-5" icon={PowerOff} strokeWidth={2} />
      </Button>
    </header>
  );
};
