"use client";

import { PencilEdit02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Route } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Transaction {
  assetPlate: string;
  date: string;
  driverName: string;
  id: string;
  kiloMeterPerLitre: number;
  lastKilometer: number;
  litresPurchased: number;
  modelName: string;
  refillKilometer: number;
  transactionTotal: number;
}

const formatIDR = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const transactionColumns: ColumnDef<Transaction>[] = [
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
    accessorKey: "driverName",
    header: "Nama Driver",
  },
  {
    accessorKey: "assetPlate",
    header: "Plat Kendaraan",
  },
  {
    accessorKey: "modelName",
    header: "Model Kendaraan",
  },
  {
    accessorKey: "transactionTotal",
    header: "Total Transaksi",
    cell: ({ row }) => {
      return formatIDR(row.original.transactionTotal);
    },
  },
  {
    accessorKey: "litresPurchased",
    header: "Liter",
    cell: ({ row }) => {
      return `${row.original.litresPurchased.toFixed(2)} L`;
    },
  },
  {
    accessorKey: "lastKilometer",
    header: "KM Sebelum",
    cell: ({ row }) => {
      return `${row.original.lastKilometer} km`;
    },
  },
  {
    accessorKey: "refillKilometer",
    header: "KM Isi",
    cell: ({ row }) => {
      return `${row.original.refillKilometer} km`;
    },
  },
  {
    accessorKey: "distanceCovered",
    header: "Jarak Tempuh",
    cell: ({ row }) => {
      const distance =
        row.original.refillKilometer - row.original.lastKilometer;
      return `${distance} km`;
    },
  },
  {
    accessorKey: "kiloMeterPerLitre",
    header: "KM/Liter",
    cell: ({ row }) => {
      return `${row.original.kiloMeterPerLitre.toFixed(2)} km/L`;
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
