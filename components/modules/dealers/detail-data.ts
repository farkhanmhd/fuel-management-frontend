export type Dealer = {
  id: string;
  name: string;
  code: string;
  area: string;
};

export type Asset = {
  id: string;
  driverName: string;
  modelName: string;
  licensePlate: string;
  assetYear: number;
  totalKilometer: number;
  totalLiter: number;
  averageKilometerPerLitre: number;
};

export type Driver = {
  id: string;
  nip: string;
  driverName: string;
  department: string;
  totalAsset: number;
};

export type TransactionHistory = {
  id: string;
  date: string;
  driverName: string;
  licensePlate: string;
  modelName: string;
  transactionTotal: number;
  litrePurchased: number;
  previousKilometer: number;
  currentKilometer: number;
  distanceCovered: number;
  kiloMeterPerLitre: number;
};

export interface DealerDetail {
  assets: Asset[];
  dealer: Dealer;
  drivers: Driver[];
  transactions: TransactionHistory[];
}

const mockDealerDetails: Record<string, DealerDetail> = {
  "1": {
    dealer: {
      id: "1",
      name: "SENTRAL MEDAN",
      code: "SM-001",
      area: "Sumatera Utara",
    },
    assets: [
      {
        id: "1",
        driverName: "Ahmad Santoso",
        modelName: "Toyota Innova",
        licensePlate: "BB 1234 AB",
        assetYear: 2022,
        totalKilometer: 45_678,
        totalLiter: 5420,
        averageKilometerPerLitre: 12.5,
      },
      {
        id: "2",
        driverName: "Budi Prakoso",
        modelName: "Toyota Hilux",
        licensePlate: "BB 5678 CD",
        assetYear: 2021,
        totalKilometer: 89_200,
        totalLiter: 12_450,
        averageKilometerPerLitre: 10.2,
      },
      {
        id: "3",
        driverName: "Citra Dewi",
        modelName: "Mitsubishi XPander",
        licensePlate: "BB 9012 EF",
        assetYear: 2023,
        totalKilometer: 32_450,
        totalLiter: 3890,
        averageKilometerPerLitre: 11.8,
      },
      {
        id: "4",
        driverName: "Dedi Kurniawan",
        modelName: "Honda CR-V",
        licensePlate: "BB 3456 GH",
        assetYear: 2020,
        totalKilometer: 124_300,
        totalLiter: 15_200,
        averageKilometerPerLitre: 9.5,
      },
      {
        id: "5",
        driverName: "Eka Pratama",
        modelName: "Toyota Fortuner",
        licensePlate: "BB 7890 IJ",
        assetYear: 2022,
        totalKilometer: 67_890,
        totalLiter: 8200,
        averageKilometerPerLitre: 11.2,
      },
      {
        id: "6",
        driverName: "Fitri Handayani",
        modelName: "Nissan Serena",
        licensePlate: "BB 2345 KL",
        assetYear: 2021,
        totalKilometer: 56_700,
        totalLiter: 6900,
        averageKilometerPerLitre: 10.8,
      },
      {
        id: "7",
        driverName: "Gunawan",
        modelName: "Mitsubishi Pajero",
        licensePlate: "BB 6789 MN",
        assetYear: 2020,
        totalKilometer: 145_600,
        totalLiter: 18_400,
        averageKilometerPerLitre: 9.2,
      },
      {
        id: "8",
        driverName: "Hendra Wijaya",
        modelName: "Toyota Avanza",
        licensePlate: "BB 0123 OP",
        assetYear: 2023,
        totalKilometer: 28_900,
        totalLiter: 3200,
        averageKilometerPerLitre: 12.5,
      },
    ],
    drivers: [
      {
        id: "1",
        nip: "NIP-001",
        driverName: "Ahmad Santoso",
        department: "Logistik",
        totalAsset: 2,
      },
      {
        id: "2",
        nip: "NIP-016",
        driverName: "Rudi Hermawan",
        department: "Pengiriman",
        totalAsset: 1,
      },
      {
        id: "3",
        nip: "NIP-002",
        driverName: "Budi Prakoso",
        department: "Logistik",
        totalAsset: 1,
      },
      {
        id: "4",
        nip: "NIP-003",
        driverName: "Citra Dewi",
        department: "Operasional",
        totalAsset: 1,
      },
      {
        id: "5",
        nip: "NIP-004",
        driverName: "Dedi Kurniawan",
        department: "Logistik",
        totalAsset: 1,
      },
      {
        id: "6",
        nip: "NIP-005",
        driverName: "Eka Pratama",
        department: "Pengiriman",
        totalAsset: 1,
      },
      {
        id: "7",
        nip: "NIP-006",
        driverName: "Fitri Handayani",
        department: "Operasional",
        totalAsset: 1,
      },
      {
        id: "8",
        nip: "NIP-007",
        driverName: "Gunawan",
        department: "Logistik",
        totalAsset: 1,
      },
      {
        id: "9",
        nip: "NIP-008",
        driverName: "Hendra Wijaya",
        department: "Pengiriman",
        totalAsset: 1,
      },
    ],
    transactions: [
      {
        id: "1",
        date: "2026-03-13T08:30:00+07:00",
        driverName: "Ahmad Santoso",
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
        date: "2026-03-12T10:15:00+07:00",
        driverName: "Budi Prakoso",
        licensePlate: "BB 5678 CD",
        modelName: "Toyota Hilux",
        transactionTotal: 420_000,
        litrePurchased: 54.3,
        previousKilometer: 412_500,
        currentKilometer: 420_000,
        distanceCovered: 7500,
        kiloMeterPerLitre: 10.2,
      },
      {
        id: "3",
        date: "2026-03-13T09:15:00+07:00",
        driverName: "Citra Dewi",
        licensePlate: "BB 9012 EF",
        modelName: "Mitsubishi XPander",
        transactionTotal: 280_000,
        litrePurchased: 36.2,
        previousKilometer: 234_500,
        currentKilometer: 237_800,
        distanceCovered: 3300,
        kiloMeterPerLitre: 11.5,
      },
      {
        id: "4",
        date: "2026-03-12T14:30:00+07:00",
        driverName: "Dedi Kurniawan",
        licensePlate: "BB 3456 GH",
        modelName: "Honda CR-V",
        transactionTotal: 385_000,
        litrePurchased: 49.7,
        previousKilometer: 389_200,
        currentKilometer: 392_800,
        distanceCovered: 3600,
        kiloMeterPerLitre: 11.8,
      },
      {
        id: "5",
        date: "2026-03-11T08:00:00+07:00",
        driverName: "Eka Pratama",
        licensePlate: "BB 7890 IJ",
        modelName: "Toyota Fortuner",
        transactionTotal: 500_000,
        litrePurchased: 64.6,
        previousKilometer: 278_900,
        currentKilometer: 286_500,
        distanceCovered: 7600,
        kiloMeterPerLitre: 9.5,
      },
      {
        id: "6",
        date: "2026-03-11T11:45:00+07:00",
        driverName: "Fitri Handayani",
        licensePlate: "BB 2345 KL",
        modelName: "Nissan Serena",
        transactionTotal: 185_000,
        litrePurchased: 23.9,
        previousKilometer: 512_300,
        currentKilometer: 514_800,
        distanceCovered: 2500,
        kiloMeterPerLitre: 14.2,
      },
      {
        id: "7",
        date: "2026-03-10T07:30:00+07:00",
        driverName: "Gunawan",
        licensePlate: "BB 6789 MN",
        modelName: "Mitsubishi Pajero",
        transactionTotal: 450_000,
        litrePurchased: 58.1,
        previousKilometer: 145_600,
        currentKilometer: 152_200,
        distanceCovered: 6600,
        kiloMeterPerLitre: 8.7,
      },
      {
        id: "8",
        date: "2026-03-10T13:20:00+07:00",
        driverName: "Hendra Wijaya",
        licensePlate: "BB 0123 OP",
        modelName: "Toyota Avanza",
        transactionTotal: 225_000,
        litrePurchased: 29.0,
        previousKilometer: 367_800,
        currentKilometer: 370_500,
        distanceCovered: 2700,
        kiloMeterPerLitre: 13.1,
      },
      {
        id: "9",
        date: "2026-03-09T09:00:00+07:00",
        driverName: "Ahmad Santoso",
        licensePlate: "BB 1234 AB",
        modelName: "Toyota Innova",
        transactionTotal: 310_000,
        litrePurchased: 40.0,
        previousKilometer: 450_200,
        currentKilometer: 454_322,
        distanceCovered: 4122,
        kiloMeterPerLitre: 10.3,
      },
      {
        id: "10",
        date: "2026-03-09T15:30:00+07:00",
        driverName: "Rudi Hermawan",
        licensePlate: "BB 4567 QR",
        modelName: "Toyota Innova",
        transactionTotal: 275_000,
        litrePurchased: 35.5,
        previousKilometer: 398_700,
        currentKilometer: 401_200,
        distanceCovered: 2500,
        kiloMeterPerLitre: 10.6,
      },
      {
        id: "11",
        date: "2026-03-08T08:45:00+07:00",
        driverName: "Budi Prakoso",
        licensePlate: "BB 5678 CD",
        modelName: "Toyota Hilux",
        transactionTotal: 395_000,
        litrePurchased: 51.0,
        previousKilometer: 405_500,
        currentKilometer: 412_500,
        distanceCovered: 7000,
        kiloMeterPerLitre: 9.8,
      },
      {
        id: "12",
        date: "2026-03-08T12:00:00+07:00",
        driverName: "Citra Dewi",
        licensePlate: "BB 9012 EF",
        modelName: "Mitsubishi XPander",
        transactionTotal: 245_000,
        litrePurchased: 31.6,
        previousKilometer: 230_900,
        currentKilometer: 234_500,
        distanceCovered: 3600,
        kiloMeterPerLitre: 10.4,
      },
      {
        id: "13",
        date: "2026-03-07T10:30:00+07:00",
        driverName: "Dedi Kurniawan",
        licensePlate: "BB 3456 GH",
        modelName: "Honda CR-V",
        transactionTotal: 420_000,
        litrePurchased: 54.2,
        previousKilometer: 380_000,
        currentKilometer: 389_200,
        distanceCovered: 9200,
        kiloMeterPerLitre: 9.2,
      },
      {
        id: "14",
        date: "2026-03-07T14:15:00+07:00",
        driverName: "Eka Pratama",
        licensePlate: "BB 7890 IJ",
        modelName: "Toyota Fortuner",
        transactionTotal: 465_000,
        litrePurchased: 60.0,
        previousKilometer: 268_900,
        currentKilometer: 278_900,
        distanceCovered: 10_000,
        kiloMeterPerLitre: 9.0,
      },
      {
        id: "15",
        date: "2026-03-06T09:00:00+07:00",
        driverName: "Fitri Handayani",
        licensePlate: "BB 2345 KL",
        modelName: "Nissan Serena",
        transactionTotal: 210_000,
        litrePurchased: 27.1,
        previousKilometer: 505_200,
        currentKilometer: 512_300,
        distanceCovered: 7100,
        kiloMeterPerLitre: 8.5,
      },
      {
        id: "16",
        date: "2026-03-06T11:30:00+07:00",
        driverName: "Gunawan",
        licensePlate: "BB 6789 MN",
        modelName: "Mitsubishi Pajero",
        transactionTotal: 380_000,
        litrePurchased: 49.0,
        previousKilometer: 135_600,
        currentKilometer: 145_600,
        distanceCovered: 10_000,
        kiloMeterPerLitre: 9.8,
      },
      {
        id: "17",
        date: "2026-03-05T08:00:00+07:00",
        driverName: "Hendra Wijaya",
        licensePlate: "BB 0123 OP",
        modelName: "Toyota Avanza",
        transactionTotal: 195_000,
        litrePurchased: 25.2,
        previousKilometer: 362_600,
        currentKilometer: 367_800,
        distanceCovered: 5200,
        kiloMeterPerLitre: 9.2,
      },
    ],
  },
};

export const getDealerDetail = (id: string) => {
  return mockDealerDetails[id] || mockDealerDetails["1"];
};
