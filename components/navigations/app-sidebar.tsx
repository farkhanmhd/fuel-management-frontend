"use client";

import {
  Building,
  Car,
  ChartCandleIcon,
  FuelStationIcon,
  StreeringWheelIcon,
  Users,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { type NavLinkProp, NavLinks } from "./nav-links";
import { NavUser } from "./nav-user";
import { SidebarLogo } from "./sidebar-logo";

// This is sample data.
const data: NavLinkProp[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <HugeiconsIcon icon={ChartCandleIcon} strokeWidth={2} />,
  },
  {
    title: "Transaksi BBM",
    url: "/transactions",
    icon: <HugeiconsIcon icon={FuelStationIcon} strokeWidth={2} />,
  },
  {
    title: "Dealer",
    url: "/dealers",
    icon: <HugeiconsIcon icon={Building} strokeWidth={2} />,
  },
  {
    title: "Aset",
    url: "/assets",
    icon: <HugeiconsIcon icon={Car} strokeWidth={2} />,
  },
  {
    title: "Driver",
    url: "/drivers",
    icon: <HugeiconsIcon icon={StreeringWheelIcon} strokeWidth={2} />,
  },
  {
    title: "User",
    url: "/users",
    icon: <HugeiconsIcon icon={Users} strokeWidth={2} />,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="z-50" collapsible="icon">
      <SidebarHeader>
        <SidebarLogo />
      </SidebarHeader>
      <SidebarContent>
        <NavLinks items={data} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
