"use client";

import { useQuery } from "@tanstack/react-query";
import { type Asset, assetColumns } from "@/components/modules/assets/columns";
import { DataTableBody } from "@/components/table/data-table-body";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTablePagination } from "@/components/table/data-table-pagination";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableSkeleton } from "@/components/table/data-table-skeleton";
import { TableProvider } from "@/components/table/react-table";
import { ErrorState } from "@/components/utils/error-state";

const mockAssets: () => Promise<Asset[]> = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return [
    {
      id: "1",
      modelName: "Toyota Innova",
      licensePlate: "BB 1234 AB",
      assetYear: 2022,
      dealerName: "SENTRAL MEDAN",
      status: "MDS",
      totalKilometer: 45_678,
      totalLiter: 5420,
      averageKilometerPerLitre: 12.5,
    },
    {
      id: "2",
      modelName: "Mitsubishi L300",
      licensePlate: "BK 5678 CD",
      assetYear: 2023,
      dealerName: "SETIA BUDI",
      status: "NEQ",
      totalKilometer: 32_100,
      totalLiter: 4150,
      averageKilometerPerLitre: 10.2,
    },
    {
      id: "3",
      modelName: "Toyota Hilux",
      licensePlate: "BB 9012 EF",
      assetYear: 2021,
      dealerName: "AR HAKIM",
      status: "MDS",
      totalKilometer: 89_200,
      totalLiter: 12_450,
      averageKilometerPerLitre: 10.2,
    },
    {
      id: "4",
      modelName: "Isuzu Elf",
      licensePlate: "BB 3456 GH",
      assetYear: 2020,
      dealerName: "MARELAN",
      status: "SEWA",
      totalKilometer: 156_700,
      totalLiter: 18_900,
      averageKilometerPerLitre: 11.8,
    },
    {
      id: "5",
      modelName: "Honda Brio",
      licensePlate: "BK 7890 IJ",
      assetYear: 2024,
      dealerName: "SM RAJA",
      status: "NEQ",
      totalKilometer: 12_450,
      totalLiter: 1650,
      averageKilometerPerLitre: 9.5,
    },
    {
      id: "6",
      modelName: "Suzuki Carry",
      licensePlate: "BB 2345 KL",
      assetYear: 2022,
      dealerName: "BILAL",
      status: "MDS",
      totalKilometer: 67_800,
      totalLiter: 8920,
      averageKilometerPerLitre: 14.2,
    },
    {
      id: "7",
      modelName: "Daihatsu Gran Max",
      licensePlate: "BD 6789 MN",
      assetYear: 2021,
      dealerName: "GATOT SUBROTO",
      status: "SEWA",
      totalKilometer: 98_300,
      totalLiter: 12_800,
      averageKilometerPerLitre: 8.7,
    },
    {
      id: "8",
      modelName: "Toyota Avanza",
      licensePlate: "BK 0123 OP",
      assetYear: 2023,
      dealerName: "BINJAI",
      status: "MDS",
      totalKilometer: 45_600,
      totalLiter: 5890,
      averageKilometerPerLitre: 13.1,
    },
    {
      id: "9",
      modelName: "Mitsubishi Xpander",
      licensePlate: "BB 4567 QR",
      assetYear: 2022,
      dealerName: "KOTA PINANG",
      status: "NEQ",
      totalKilometer: 56_700,
      totalLiter: 7250,
      averageKilometerPerLitre: 10.8,
    },
    {
      id: "10",
      modelName: "Wuling Air EV",
      licensePlate: "BP 8901 ST",
      assetYear: 2024,
      dealerName: "RANTAU PRAPAT",
      status: "MDS",
      totalKilometer: 28_900,
      totalLiter: 3200,
      averageKilometerPerLitre: 11.3,
    },
    {
      id: "11",
      modelName: "Hyundai Stargazer",
      licensePlate: "BB 2345 UV",
      assetYear: 2023,
      dealerName: "TAMORA",
      status: "SEWA",
      totalKilometer: 41_200,
      totalLiter: 5100,
      averageKilometerPerLitre: 12.0,
    },
    {
      id: "12",
      modelName: "Nissan Livina",
      licensePlate: "BK 6789 WX",
      assetYear: 2021,
      dealerName: "PERBAUNGAN",
      status: "MDS",
      totalKilometer: 78_900,
      totalLiter: 9850,
      averageKilometerPerLitre: 11.3,
    },
    {
      id: "13",
      modelName: "Kia Carens",
      licensePlate: "BB 0123 YZ",
      assetYear: 2024,
      dealerName: "SIANTAR",
      status: "NEQ",
      totalKilometer: 15_600,
      totalLiter: 1890,
      averageKilometerPerLitre: 12.0,
    },
    {
      id: "14",
      modelName: "Toyota Alphard",
      licensePlate: "BD 5678 AA",
      assetYear: 2022,
      dealerName: "KISARAN",
      status: "SEWA",
      totalKilometer: 67_800,
      totalLiter: 8200,
      averageKilometerPerLitre: 9.0,
    },
    {
      id: "15",
      modelName: "Honda CR-V",
      licensePlate: "BB 9012 BC",
      assetYear: 2023,
      dealerName: "AEK KANOPAN",
      status: "MDS",
      totalKilometer: 34_500,
      totalLiter: 4200,
      averageKilometerPerLitre: 12.0,
    },
  ];
};

const AssetsPage = () => {
  const { data, isLoading, isError, refetch, error } = useQuery({
    queryFn: () => mockAssets(),
    queryKey: ["assets"],
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
    <TableProvider columns={assetColumns} data={data || []}>
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

export default AssetsPage;
