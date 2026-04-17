"use client";

import { useQuery } from "@tanstack/react-query";
import {
  type DriverTable,
  driverColumns,
} from "@/components/modules/drivers/columns";
import { DataTableBody } from "@/components/table/data-table-body";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTablePagination } from "@/components/table/data-table-pagination";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableSkeleton } from "@/components/table/data-table-skeleton";
import { TableProvider } from "@/components/table/react-table";
import { ErrorState } from "@/components/utils/error-state";

const mockDrivers: () => Promise<DriverTable[]> = async () => {
  await new Promise((res) => setTimeout(res, 3000));

  return [
    {
      id: "1",
      nip: "NIP-001",
      name: "Ahmad Santoso",
      department: "Logistik",
      dealerName: "SENTRAL MEDAN",
      area: "Sumatera Utara",
      totalAssetHandled: 2,
    },
    {
      id: "2",
      nip: "NIP-002",
      name: "Budi Prakoso",
      department: "Pengiriman",
      dealerName: "SETIA BUDI",
      area: "Sumatera Utara",
      totalAssetHandled: 1,
    },
    {
      id: "3",
      nip: "NIP-003",
      name: "Citra Dewi",
      department: "Operasional",
      dealerName: "AR HAKIM",
      area: "Sumatera Utara",
      totalAssetHandled: 3,
    },
    {
      id: "4",
      nip: "NIP-004",
      name: "Dedi Kurniawan",
      department: "Logistik",
      dealerName: "MARELAN",
      area: "Sumatera Utara",
      totalAssetHandled: 1,
    },
    {
      id: "5",
      nip: "NIP-005",
      name: "Eka Pratama",
      department: "Pengiriman",
      dealerName: "SM RAJA",
      area: "Sumatera Utara",
      totalAssetHandled: 2,
    },
    {
      id: "6",
      nip: "NIP-006",
      name: "Fitri Handayani",
      department: "Operasional",
      dealerName: "BILAL",
      area: "Sumatera Utara",
      totalAssetHandled: 1,
    },
    {
      id: "7",
      nip: "NIP-007",
      name: "Gunawan",
      department: "Logistik",
      dealerName: "GATOT SUBROTO",
      area: "Sumatera Utara",
      totalAssetHandled: 2,
    },
    {
      id: "8",
      nip: "NIP-008",
      name: "Hendra Wijaya",
      department: "Pengiriman",
      dealerName: "BINJAI",
      area: "Sumatera Utara",
      totalAssetHandled: 1,
    },
    {
      id: "9",
      nip: "NIP-009",
      name: "Indra Permana",
      department: "Operasional",
      dealerName: "KOTA PINANG",
      area: "Sumatera Utara",
      totalAssetHandled: 2,
    },
    {
      id: "10",
      nip: "NIP-010",
      name: "Joko Susilo",
      department: "Logistik",
      dealerName: "RANTAU PRAPAT",
      area: "Sumatera Utara",
      totalAssetHandled: 1,
    },
    {
      id: "11",
      nip: "NIP-011",
      name: "Kartika Sari",
      department: "Pengiriman",
      dealerName: "TAMORA",
      area: "Sumatera Utara",
      totalAssetHandled: 2,
    },
    {
      id: "12",
      nip: "NIP-012",
      name: "Lina Rohmawati",
      department: "Operasional",
      dealerName: "PERBAUNGAN",
      area: "Sumatera Utara",
      totalAssetHandled: 1,
    },
    {
      id: "13",
      nip: "NIP-013",
      name: "Muhammad Fadli",
      department: "Logistik",
      dealerName: "SIANTAR",
      area: "Sumatera Utara",
      totalAssetHandled: 2,
    },
    {
      id: "14",
      nip: "NIP-014",
      name: "Nurul Hidayah",
      department: "Pengiriman",
      dealerName: "KISARAN",
      area: "Sumatera Utara",
      totalAssetHandled: 1,
    },
    {
      id: "15",
      nip: "NIP-015",
      name: "Olivia Puteri",
      department: "Operasional",
      dealerName: "AEK KANOPAN",
      area: "Sumatera Utara",
      totalAssetHandled: 2,
    },
  ];
};

const DriversPage = () => {
  const { data, isLoading, isError, refetch, error } = useQuery({
    queryFn: () => mockDrivers(),
    queryKey: ["drivers"],
  });

  if (isError) {
    return (
      <ErrorState
        description={error?.message}
        onRetry={() => refetch()}
        title="Failed to load Dealers"
      />
    );
  }

  return (
    <TableProvider columns={driverColumns} data={data || []}>
      <div className="flex flex-col gap-4">
        <div className="flex w-full items-center justify-between gap-4">
          <DataTableSearch className="w-sm max-w-full" />
        </div>
        <DataTableLayout fullWidth>
          {isLoading ? <DataTableSkeleton rows={10} /> : <DataTableBody />}
        </DataTableLayout>
        <DataTablePagination />
      </div>
    </TableProvider>
  );
};

export default DriversPage;
