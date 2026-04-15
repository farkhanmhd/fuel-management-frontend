"use client";

import { PencilEdit02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Route } from "next";
import Link from "next/link";
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
    header: "NIP",
    cell: ({ row }) => {
      return row.original.nip;
    },
  },
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    accessorKey: "department",
    header: "Departemen",
  },
  {
    accessorKey: "dealerName",
    header: "Dealer",
  },
  {
    accessorKey: "area",
    header: "Area",
  },
  {
    accessorKey: "totalAssetHandled",
    header: "Jumlah Aset",
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
          <HugeiconsIcon icon={PencilEdit02Icon} />
        </Link>
      );
    },
  },
];
