"use client";

import {
  SidebarLeft01FreeIcons,
  SidebarRight01FreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";

export const SidebarTrigger = () => {
  const { toggleSidebar, open } = useSidebar();
  return (
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
  );
};
