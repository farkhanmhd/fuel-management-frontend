"use client";

import { Table } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { useSidebar } from "../ui/sidebar";
import { DataTableHeader } from "./data-table-header";

interface DataTableLayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean | undefined;
}

export const DataTableLayout = ({
  children,
  fullWidth = undefined,
  className,
}: DataTableLayoutProps) => {
  "use no memo";
  const { open } = useSidebar();
  return (
    <ScrollArea
      className={cn(
        "max-w-[calc(100svw-48px)] overflow-hidden rounded-xl border",
        {
          "md:w-[calc(100svw-336px)]": fullWidth && open,
          "md:w-[calc(100svw-112px)]": fullWidth && !open,
        },
        className
      )}
    >
      <Table>
        <DataTableHeader />
        {children}
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
