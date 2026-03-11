"use client";

import { flexRender } from "@tanstack/react-table";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useTableContext } from "./context";

export const DataTableBody = () => {
  const { table, columns, selectableRows } = useTableContext();
  const rows = table.getRowModel().rows;

  return (
    <TableBody>
      {rows?.length ? (
        rows.map((row) => (
          <TableRow
            className={cn({
              "cursor-pointer": selectableRows,
            })}
            data-state={row.getIsSelected() && "selected"}
            key={row.id}
            onClick={() => selectableRows && row.toggleSelected()}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell className="px-4" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow className="h-full">
          <TableCell className="text-center" colSpan={columns.length}>
            No results found
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};
