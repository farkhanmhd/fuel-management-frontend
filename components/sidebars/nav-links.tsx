"use client";

import type { Route } from "next";
import Link from "next/link";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
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
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          // group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-12!
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              className="text-base group-data-[collapsible=icon]:size-12! group-data-[collapsible=icon]:p-2! [&_svg]:size-5"
              size="lg"
              tooltip={item.title}
            >
              <Link href={item.url}>
                <div className="flex aspect-square size-8 items-center justify-center">
                  {item.icon}
                </div>
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
