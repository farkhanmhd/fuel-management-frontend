"use client";

import { EyeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Route } from "next";
import Link from "next/link";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
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
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tanggal" />
    ),
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
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nama Driver" />
    ),
  },
  {
    accessorKey: "assetPlate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Plat Kendaraan" />
    ),
  },
  {
    accessorKey: "modelName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Model Kendaraan" />
    ),
  },
  {
    accessorKey: "transactionTotal",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total Transaksi" />
    ),
    cell: ({ row }) => {
      return formatIDR(row.original.transactionTotal);
    },
  },
  {
    accessorKey: "litresPurchased",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Liter" />
    ),
    cell: ({ row }) => {
      return `${row.original.litresPurchased.toFixed(2)} L`;
    },
  },
  {
    accessorKey: "lastKilometer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="KM Sebelum" />
    ),
    cell: ({ row }) => {
      return `${row.original.lastKilometer.toLocaleString("id-ID")} km`;
    },
  },
  {
    accessorKey: "refillKilometer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="KM Setelah" />
    ),
    cell: ({ row }) => {
      return `${row.original.refillKilometer.toLocaleString("id-ID")} km`;
    },
  },
  {
    accessorKey: "distanceCovered",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Jarak Tempuh" />
    ),
    cell: ({ row }) => {
      const distance =
        row.original.refillKilometer - row.original.lastKilometer;
      return `${distance.toLocaleString("id-ID")} km`;
    },
  },
  {
    accessorKey: "kiloMeterPerLitre",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="KM/Liter" />
    ),
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
          <HugeiconsIcon icon={EyeIcon} />
        </Link>
      );
    },
  },
];
