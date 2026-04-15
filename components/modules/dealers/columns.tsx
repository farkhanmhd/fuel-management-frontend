"use client";

import { PencilEdit02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Route } from "next";
import Link from "next/link";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import { buttonVariants } from "@/components/ui/button";
import type { DealerDetail } from "@/lib/api/dealers";
import { cn } from "@/lib/utils";

export const dealerColumns: ColumnDef<DealerDetail>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Kode" />
    ),
    cell: ({ row }) => {
      return row.original?.code || "-";
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nama Dealer" />
    ),
  },
  {
    accessorKey: "area",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Area" />
    ),
  },
  // {
  //   accessorKey: "assets",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Aset" />
  //   ),
  // },
  // {
  //   accessorKey: "drivers",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Driver" />
  //   ),
  // },
  {
    id: "Actions",
    cell: ({ row }) => {
      return (
        <Link
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          href={`/dealers/${row.original.id}` as Route}
        >
          <HugeiconsIcon icon={PencilEdit02Icon} />
        </Link>
      );
    },
  },
];
