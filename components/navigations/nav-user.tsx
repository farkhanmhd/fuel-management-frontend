"use client";

import { User } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavUser() {
  const { isMobile, toggleSidebar } = useSidebar();

  const handleLinkClick = () => {
    if (isMobile) {
      toggleSidebar();
    }
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          className="text-base group-data-[collapsible=icon]:size-12! group-data-[collapsible=icon]:p-2! [&_svg]:size-5"
          onClick={handleLinkClick}
          size="lg"
        >
          <Link href="/dashboard">
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
