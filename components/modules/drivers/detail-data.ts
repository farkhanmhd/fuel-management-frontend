export type Driver = {
  id: string;
  name: string;
  department: string;
  nip: string;
  dealerName: string;
  area: string;
};

export type Asset = {
  id: string;
  modelName: string;
  licensePlate: string;
  assetYear: number;
  dealerName: string;
  status: "MDS" | "NEQ" | "SEWA";
  totalKilometer: number;
  totalLiter: number;
  averageKilometerPerLitre: number;
};

export type TransactionHistory = {
  id: string;
  date: string;
  licensePlate: string;
  modelName: string;
  transactionTotal: number;
  litrePurchased: number;
  previousKilometer: number;
  currentKilometer: number;
  distanceCovered: number;
  kiloMeterPerLitre: number;
};

export interface DriverDetail {
  assets: Asset[];
  driver: Driver;
  transactions: TransactionHistory[];
}

const mockDriverDetails: Record<string, DriverDetail> = {
  "1": {
    driver: {
      id: "1",
      name: "Ahmad Santoso",
      department: "Logistik",
      nip: "NIP-001",
      dealerName: "SENTRAL MEDAN",
      area: "Sumatera Utara",
    },
    assets: [
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
        modelName: "Toyota Avanza",
        licensePlate: "BK 5678 CD",
        assetYear: 2023,
        dealerName: "SETIA BUDI",
        status: "NEQ",
        totalKilometer: 23_400,
        totalLiter: 2800,
        averageKilometerPerLitre: 11.2,
      },
    ],
    transactions: [
      {
        id: "1",
        date: "2026-03-13T08:30:00+07:00",
        licensePlate: "BB 1234 AB",
        modelName: "Toyota Innova",
        transactionTotal: 350_000,
        litrePurchased: 45.5,
        previousKilometer: 454_322,
        currentKilometer: 456_788,
        distanceCovered: 2466,
        kiloMeterPerLitre: 12.5,
      },
      {
        id: "2",
        date: "2026-03-11T10:15:00+07:00",
        licensePlate: "BB 1234 AB",
        modelName: "Toyota Innova",
        transactionTotal: 320_000,
        litrePurchased: 42.0,
        previousKilometer: 452_100,
        currentKilometer: 454_322,
        distanceCovered: 2222,
        kiloMeterPerLitre: 11.2,
      },
      {
        id: "3",
        date: "2026-03-09T14:20:00+07:00",
        licensePlate: "BB 1234 AB",
        modelName: "Toyota Innova",
        transactionTotal: 335_000,
        litrePurchased: 43.5,
        previousKilometer: 449_800,
        currentKilometer: 452_100,
        distanceCovered: 2300,
        kiloMeterPerLitre: 10.8,
      },
      {
        id: "4",
        date: "2026-03-07T09:45:00+07:00",
        licensePlate: "BK 5678 CD",
        modelName: "Toyota Avanza",
        transactionTotal: 290_000,
        litrePurchased: 38.0,
        previousKilometer: 447_200,
        currentKilometer: 449_800,
        distanceCovered: 2600,
        kiloMeterPerLitre: 13.1,
      },
      {
        id: "5",
        date: "2026-03-05T16:30:00+07:00",
        licensePlate: "BK 5678 CD",
        modelName: "Toyota Avanza",
        transactionTotal: 310_000,
        litrePurchased: 40.5,
        previousKilometer: 444_500,
        currentKilometer: 447_200,
        distanceCovered: 2700,
        kiloMeterPerLitre: 11.5,
      },
    ],
  },
};

export const getDriverDetail = (id: string) => {
  return mockDriverDetails[id] || mockDriverDetails["1"];
};
