"use client";

import { uuid } from "@tanstack/react-form";
import type { ColumnDef } from "@tanstack/react-table";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "../ui/skeleton";

interface DataTableSkeletonProps<
  TData extends { id: string },
  TValue = unknown,
> {
  columns: ColumnDef<TData, TValue>[];
  rows: number;
}

export const DataTableBodySkeleton = <
  TData extends { id: string },
  TValue = unknown,
>({
  rows,
  columns,
}: DataTableSkeletonProps<TData, TValue>) => {
  return (
    <TableBody>
      {Array.from({ length: rows }).map(() => (
        <TableRow key={uuid()}>
          {columns.map(() => (
            <TableCell className="px-4" key={uuid()}>
              <Skeleton className="h-8 w-full" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};
