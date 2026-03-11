"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { Route } from "next";
import { Link } from "next-view-transitions";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import type { DealerList } from "@/lib/api/dealers/server";

export const dealerColumns: ColumnDef<DealerList>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Kode" />
    ),
    cell: ({ row }) => {
      return (
        <Link href={`/dealers/${row.original.id}` as Route}>
          {row.original.code}
        </Link>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nama Dealer" />
    ),
  },
  {
    accessorKey: "area_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Area" />
    ),
  },
];
