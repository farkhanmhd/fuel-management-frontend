"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useTableContext } from "./react-table";

interface DataTableSkeletonProps {
  rows: number;
}

export const DataTableSkeleton = ({ rows }: DataTableSkeletonProps) => {
  "use no memo";
  const { columns } = useTableContext();

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
