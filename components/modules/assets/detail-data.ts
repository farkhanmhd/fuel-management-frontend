export type Asset = {
  id: string;
  modelName: string;
  licensePlate: string;
  assetYear: number;
  totalKiloMeter: number;
  totalLitre: number;
  averageKmPerLitre: number;
  status: "MDS" | "NEQ" | "SEWA";
};

export type Dealer = {
  id: string;
  code: string;
  name: string;
  area: string;
};

export type Driver = {
  id: string;
  nip: string;
  name: string;
  department: string;
};

export type Transaction = {
  id: string;
  date: string;
  kiloMeterPerLitre: number;
  lastKilometer: number;
  litresPurchased: number;
  refillKilometer: number;
  transactionTotal: number;
};

export interface AssetDetail {
  asset: Asset;
  dealer: Dealer;
  driver: Driver;
  id: string;
  transactions: Transaction[];
}

const mockAssetDetails: Record<string, AssetDetail> = {
  "1": {
    id: "1",
    asset: {
      id: "1",
      modelName: "Toyota Innova",
      licensePlate: "BB 1234 AB",
      assetYear: 2022,
      totalKiloMeter: 45_678,
      totalLitre: 5420,
      averageKmPerLitre: 12.5,
      status: "MDS",
    },
    dealer: {
      id: "d1",
      code: "SM-001",
      name: "SENTRAL MEDAN",
      area: "Sumatera Utara",
    },
    driver: {
      id: "drv-1",
      nip: "NIP-001",
      name: "Ahmad Santoso",
      department: "Logistik",
    },
    transactions: [
      {
        id: "1",
        date: "2026-03-13T08:30:00+07:00",
        kiloMeterPerLitre: 12.5,
        lastKilometer: 454_322,
        litresPurchased: 45.5,
        refillKilometer: 456_788,
        transactionTotal: 350_000,
      },
      {
        id: "2",
        date: "2026-03-11T10:15:00+07:00",
        kiloMeterPerLitre: 11.2,
        lastKilometer: 452_100,
        litresPurchased: 42.0,
        refillKilometer: 454_322,
        transactionTotal: 320_000,
      },
      {
        id: "3",
        date: "2026-03-09T14:20:00+07:00",
        kiloMeterPerLitre: 10.8,
        lastKilometer: 449_800,
        litresPurchased: 43.5,
        refillKilometer: 452_100,
        transactionTotal: 335_000,
      },
      {
        id: "4",
        date: "2026-03-07T09:45:00+07:00",
        kiloMeterPerLitre: 13.1,
        lastKilometer: 447_200,
        litresPurchased: 38.0,
        refillKilometer: 449_800,
        transactionTotal: 290_000,
      },
      {
        id: "5",
        date: "2026-03-05T16:30:00+07:00",
        kiloMeterPerLitre: 11.5,
        lastKilometer: 444_500,
        litresPurchased: 40.5,
        refillKilometer: 447_200,
        transactionTotal: 310_000,
      },
      {
        id: "6",
        date: "2026-03-03T08:00:00+07:00",
        kiloMeterPerLitre: 12.8,
        lastKilometer: 442_000,
        litresPurchased: 39.0,
        refillKilometer: 444_500,
        transactionTotal: 298_000,
      },
      {
        id: "7",
        date: "2026-03-01T11:20:00+07:00",
        kiloMeterPerLitre: 10.5,
        lastKilometer: 439_300,
        litresPurchased: 44.5,
        refillKilometer: 442_000,
        transactionTotal: 342_000,
      },
      {
        id: "8",
        date: "2026-02-27T15:10:00+07:00",
        kiloMeterPerLitre: 11.9,
        lastKilometer: 436_800,
        litresPurchased: 41.0,
        refillKilometer: 439_300,
        transactionTotal: 315_000,
      },
      {
        id: "9",
        date: "2026-03-09T08:00:00+07:00",
        kiloMeterPerLitre: 10.8,
        lastKilometer: 298_400,
        litresPurchased: 49.1,
        refillKilometer: 303_100,
        transactionTotal: 380_000,
      },
      {
        id: "10",
        date: "2026-02-25T09:30:00+07:00",
        kiloMeterPerLitre: 12.3,
        lastKilometer: 434_200,
        litresPurchased: 43.0,
        refillKilometer: 436_800,
        transactionTotal: 330_000,
      },
      {
        id: "11",
        date: "2026-02-23T13:45:00+07:00",
        kiloMeterPerLitre: 11.7,
        lastKilometer: 431_500,
        litresPurchased: 44.5,
        refillKilometer: 434_200,
        transactionTotal: 342_000,
      },
      {
        id: "12",
        date: "2026-02-21T10:00:00+07:00",
        kiloMeterPerLitre: 13.4,
        lastKilometer: 428_900,
        litresPurchased: 37.5,
        refillKilometer: 431_500,
        transactionTotal: 288_000,
      },
      {
        id: "13",
        date: "2026-03-08T09:00:00+07:00",
        kiloMeterPerLitre: 12.0,
        lastKilometer: 134_200,
        litresPurchased: 67.1,
        refillKilometer: 142_000,
        transactionTotal: 520_000,
      },
    ],
  },
};

export const getAssetDetail = (id: string) => {
  return mockAssetDetails[id] || mockAssetDetails["1"];
};
