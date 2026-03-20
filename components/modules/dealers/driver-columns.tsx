"use client";

import { EyeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Route } from "next";
import Link from "next/link";
import type { Driver } from "@/components/modules/dealers/detail-data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const dealerDriverColumns: ColumnDef<Driver>[] = [
  {
    accessorKey: "nip",
    header: "NIP",
  },
  {
    accessorKey: "driverName",
    header: "Nama",
  },
  {
    accessorKey: "department",
    header: "Departemen",
  },
  {
    accessorKey: "totalAsset",
    header: "Jumlah Aset",
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
