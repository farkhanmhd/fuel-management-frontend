"use client";

import { EyeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Route } from "next";
import { Link } from "next-view-transitions";
import type { TransactionHistory } from "@/components/modules/drivers/detail-data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const formatIDR = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

export const driverTransactionColumns: ColumnDef<TransactionHistory>[] = [
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
    accessorKey: "licensePlate",
    header: "Plat Kendaraan",
  },
  {
    accessorKey: "modelName",
    header: "Model",
  },
  {
    accessorKey: "previousKilometer",
    header: "KM Sebelum",
    cell: ({ row }) => {
      return row.original.previousKilometer.toLocaleString("id-ID");
    },
  },
  {
    accessorKey: "currentKilometer",
    header: "KM Setelah",
    cell: ({ row }) => {
      return row.original.currentKilometer.toLocaleString("id-ID");
    },
  },
  {
    accessorKey: "distanceCovered",
    header: "Jarak Tempuh",
    cell: ({ row }) => {
      return row.original.distanceCovered.toLocaleString("id-ID");
    },
  },
  {
    accessorKey: "litrePurchased",
    header: "Liter",
    cell: ({ row }) => {
      return row.original.litrePurchased.toFixed(2);
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
          href={`/assets/${row.original.id}` as Route}
        >
          <HugeiconsIcon icon={EyeIcon} />
        </Link>
      );
    },
  },
];
