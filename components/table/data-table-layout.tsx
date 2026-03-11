"use client";

import { Table } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { DataTableHeader } from "./data-table-header";

interface DataTableLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const DataTableLayout = ({
  children,
  className,
}: DataTableLayoutProps) => {
  return (
    <Table className={cn(className)}>
      <DataTableHeader />
      {children}
    </Table>
  );
};
