"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTableContext } from "./react-table";

export function DataTablePagination() {
  "use no memo";
  const { table } = useTableContext();

  const handleFirstPage = () => {
    table.setPageIndex(0);
  };

  const handleLastPage = () => {
    table.setPageIndex(table.getPageCount() - 1);
  };

  const handleNextPage = () => {
    table.nextPage();
  };

  const handlePreviousPage = () => {
    table.previousPage();
  };

  const handleRowsChange = (value: string) => {
    table.setPageSize(Number(value));
    table.setPageIndex(0);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="hidden flex-1 text-muted-foreground text-sm md:block">
        {table.getFilteredSelectedRowModel().rows.length > 0 ? (
          <span>
            Selected {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length}
          </span>
        ) : (
          <span className="line-clamp-1">
            Showing {table.getRowModel().rows.length} rows
          </span>
        )}
      </div>
      <div className="flex w-full items-center justify-between space-x-6 md:w-auto lg:space-x-8">
        <div className="flex items-center space-x-2">
          <Select
            onValueChange={handleRowsChange}
            value={`${table.getState().pagination.pageSize}`}
          >
            <SelectTrigger className="w-17.5 dark:bg-background">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent className="p-1.5" side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="hidden items-center justify-center font-medium text-sm md:flex">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="hidden lg:flex"
            disabled={!table.getCanPreviousPage()}
            onClick={handleFirstPage}
            size="icon"
            variant="outline"
          >
            <span className="sr-only">Go to first page</span>
            <HugeiconsIcon icon={ChevronsLeft} />
          </Button>
          <Button
            disabled={!table.getCanPreviousPage()}
            onClick={handlePreviousPage}
            size="icon"
            variant="outline"
          >
            <span className="sr-only">Go to previous page</span>
            <HugeiconsIcon icon={ChevronLeft} />
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            onClick={handleNextPage}
            size="icon"
            variant="outline"
          >
            <span className="sr-only">Go to next page</span>
            <HugeiconsIcon icon={ChevronRight} />
          </Button>
          <Button
            className="p-0 lg:flex"
            disabled={!table.getCanNextPage()}
            onClick={handleLastPage}
            size="icon"
            variant="outline"
          >
            <span className="sr-only">Go to last page</span>
            <HugeiconsIcon icon={ChevronsRight} />
          </Button>
        </div>
      </div>
    </div>
  );
}
