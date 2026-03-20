import { cn } from "@/lib/utils";
import { SidebarMenu, SidebarMenuItem, useSidebar } from "../ui/sidebar";
import { SidebarTrigger } from "./sidebar-trigger";

export const SidebarLogo = () => {
  const { open, openMobile } = useSidebar();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex h-12 w-full items-center justify-between">
          {(open || openMobile) && (
            <div className="px-3">
              <p className="truncate font-semibold text-lg text-primary">
                Alfa Scorpii
              </p>
              <p className="truncate text-xs">
                Fuel Management Information System
              </p>
            </div>
          )}
          <div
            className={cn("flex w-full items-center", {
              "justify-end": open || openMobile,
              "md:justify-center": !open,
            })}
          >
            <SidebarTrigger />
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
