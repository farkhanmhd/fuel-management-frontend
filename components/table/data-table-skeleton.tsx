"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Skeleton } from "@/components/ui/skeleton";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";

interface DataTableSkeletonProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  rows: number;
}

export const DataTableSkeleton = <TData, TValue>({
  rows,
  columns,
}: DataTableSkeletonProps<TData, TValue>) => {
  "use no memo";

  return (
    <TableBody>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={`skeleton-row-${rowIndex}`}>
          {columns.map((_, colIndex) => (
            <TableCell className="px-4" key={`skeleton-col-${colIndex}`}>
              <Skeleton className="h-8 w-full" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};
