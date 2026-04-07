"use client";

import { EyeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Route } from "next";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import type { DealerTransaction } from "@/lib/api/dealers";
import { cn } from "@/lib/utils";

const formatIDR = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

export const dealerTransactionColumns: ColumnDef<DealerTransaction>[] = [
  {
    accessorKey: "date",
    header: "Tanggal",
    cell: ({ row }) => {
      const date = new Date(row.original.transactionTime);
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
    header: "Driver",
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
    accessorKey: "currentKilometer",
    header: "KM Isi",
    cell: ({ row }) => {
      return row.original.currentKilometer.toLocaleString("id-ID");
    },
  },
  {
    accessorKey: "distanceCovered",
    header: "Jarak Tempuh",
    cell: ({ row }) => {
      const distance = row.original.distanceCovered;
      if (distance === null || distance === undefined) {
        return "Menunggu Transaksi Selanjutnya";
      }
      return `${distance} km`;
    },
  },
  {
    accessorKey: "transactionTotal",
    header: "Total Transaksi",
    cell: ({ row }) => {
      return formatIDR(row.original.transactionTotal);
    },
  },
  {
    accessorKey: "productVariant",
    header: "Produk",
  },
  {
    accessorKey: "pricePerLitre",
    header: "Harga / Liter",
    cell: ({ row }) => {
      return formatIDR(row.original.pricePerLitre);
    },
  },

  {
    accessorKey: "litrePurchased",
    header: "Liter Isi",
    cell: ({ row }) => {
      return row.original.litrePurchased.toFixed(2);
    },
  },
  {
    accessorKey: "kiloMeterPerLitre",
    header: "KM/L",
    cell: ({ row }) => {
      const kmPerLitre = row.original.kiloMeterPerLitre;
      if (kmPerLitre === null || kmPerLitre === undefined) {
        return "Menunggu Transaksi Selanjutnya";
      }
      return `${kmPerLitre} km/L`;
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
