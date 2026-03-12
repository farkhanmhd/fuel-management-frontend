"use client";

import { Table } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { DataTableHeader } from "./data-table-header";

interface DataTableLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const DataTableLayout = ({
  children,
  className,
}: DataTableLayoutProps) => {
  "use no memo";
  return (
    <ScrollArea className="max-w-[calc(100svw-48px)] overflow-hidden rounded-xl border">
      <Table className={cn(className)}>
        <DataTableHeader />
        {children}
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
