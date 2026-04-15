"use client";

import { User } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavUser() {
  const { isMobile, toggleSidebar } = useSidebar();
  const pathname = usePathname();

  const handleLinkClick = () => {
    if (isMobile) {
      toggleSidebar();
    }
  };

  const isActive = pathname === "/account";

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          className="text-base hover:text-primary active:text-primary data-active:bg-sidebar data-active:text-primary group-data-[collapsible=icon]:size-12! group-data-[collapsible=icon]:p-2! dark:active:bg-sidebar dark:hover:bg-sidebar [&_svg]:size-5"
          isActive={isActive}
          onClick={handleLinkClick}
          size="lg"
        >
          <Link href="/account">
            <div className="flex aspect-square size-8 items-center justify-center">
              <HugeiconsIcon icon={User} strokeWidth={2} />
            </div>
            <span>Akun</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
