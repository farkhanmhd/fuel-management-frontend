"use client";

import type { Route } from "next";
import Link from "next/link";
import { Link as TransitionLink } from "next-view-transitions";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export type NavLinkProp = {
  title: string;
  url: Route;
  icon?: React.ReactNode;
  isActive?: boolean;
};

type Props = {
  items: NavLinkProp[];
};

export function NavLinks({ items }: Props) {
  const { toggleSidebar, isMobile } = useSidebar();

  const handleLinkClick = () => {
    if (isMobile) {
      toggleSidebar();
    }
  };

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          // group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-12!
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              className="text-base group-data-[collapsible=icon]:size-12! group-data-[collapsible=icon]:p-2! [&_svg]:size-5"
              onClick={handleLinkClick}
              size="lg"
              tooltip={item.title}
            >
              {isMobile ? (
                <Link href={item.url}>
                  <div className="flex aspect-square size-8 items-center justify-center">
                    {item.icon}
                  </div>
                  <span>{item.title}</span>
                </Link>
              ) : (
                <TransitionLink href={item.url}>
                  <div className="flex aspect-square size-8 items-center justify-center">
                    {item.icon}
                  </div>
                  <span>{item.title}</span>
                </TransitionLink>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
