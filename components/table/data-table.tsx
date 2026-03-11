import {
  type ColumnDef,
  flexRender,
  type Table as TableType,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Props<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  selectableRows: boolean;
  table: TableType<TData>;
}

import { cn } from "@/lib/utils";

export const DataTable = <TData, TValue>({
  table,
  selectableRows,
  columns,
}: Props<TData, TValue>) => {
  return (
    <Table className="fade-in animate-in duration-200">
      <TableHeader className="sticky top-0 z-49 bg-background">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead className="px-4" key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
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
          <TableRow className="h-full last:border-b-0">
            <TableCell className="text-center" colSpan={columns.length}>
              No results found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
