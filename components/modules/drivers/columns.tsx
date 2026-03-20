"use client";

import { EyeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Route } from "next";
import Link from "next/link";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type DriverTable = {
  id: string;
  nip: string;
  name: string;
  department: string;
  dealerName: string;
  area: string;
  totalAssetHandled: number;
};

export const driverColumns: ColumnDef<DriverTable>[] = [
  {
    accessorKey: "nip",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="NIP" />
    ),
    cell: ({ row }) => {
      return row.original.nip;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nama" />
    ),
  },
  {
    accessorKey: "department",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Departemen" />
    ),
  },
  {
    accessorKey: "dealerName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Dealer" />
    ),
  },
  {
    accessorKey: "area",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Area" />
    ),
  },
  {
    accessorKey: "totalAssetHandled",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Jumlah Aset" />
    ),
    cell: ({ row }) => {
      return row.original.totalAssetHandled;
    },
  },
  {
    id: "Actions",
    cell: ({ row }) => {
      return (
        <Link
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          href={`/drivers/${row.original.id}` as Route}
        >
          <HugeiconsIcon icon={EyeIcon} />
        </Link>
      );
    },
  },
];
