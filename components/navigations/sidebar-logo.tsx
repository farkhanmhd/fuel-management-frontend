import { Triangle } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "next-view-transitions";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

export const SidebarLogo = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          className="group-data-[collapsible=icon]:size-12! group-data-[collapsible=icon]:p-2! [&_svg]:size-5"
          size="lg"
        >
          <Link href="#">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <HugeiconsIcon icon={Triangle} strokeWidth={2} />
            </div>
            <div className="grid flex-1 text-left text-sm">
              <span className="truncate font-medium">Alfa Scorpii</span>
              <span className="truncate text-xs">
                Fuel Management Information System
              </span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
