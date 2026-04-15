"use client";

import { PencilEdit02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Route } from "next";
import Link from "next/link";
import type { Transaction } from "@/components/modules/assets/detail-data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const formatIDR = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

export const assetTransactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "date",
    header: "Tanggal",
    cell: ({ row }) => {
      const date = new Date(row.original.date);
      return date.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
  {
    accessorKey: "lastKilometer",
    header: "KM Sebelum",
    cell: ({ row }) => {
      return row.original.lastKilometer.toLocaleString("id-ID");
    },
  },
  {
    accessorKey: "refillKilometer",
    header: "KM Setelah",
    cell: ({ row }) => {
      return row.original.refillKilometer.toLocaleString("id-ID");
    },
  },
  {
    accessorKey: "litresPurchased",
    header: "Liter",
    cell: ({ row }) => {
      return row.original.litresPurchased.toFixed(2);
    },
  },
  {
    accessorKey: "transactionTotal",
    header: "Total",
    cell: ({ row }) => {
      return formatIDR(row.original.transactionTotal);
    },
  },
  {
    accessorKey: "kiloMeterPerLitre",
    header: "KM/L",
    cell: ({ row }) => {
      return row.original.kiloMeterPerLitre.toFixed(2);
    },
  },
  {
    id: "Actions",
    cell: ({ row }) => {
      return (
        <Link
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          href={`/transactions/${row.original.id}` as Route}
        >
          <HugeiconsIcon icon={PencilEdit02Icon} />
        </Link>
      );
    },
  },
];
