export interface TransactionEvidence {
  gasStationPhotoUrl: string;
  id: string;
  invoicePhotoUrl: string;
  litrePurchased: number;
  odometer: number;
  odometerPhotoUrl: string;
  totalPaid: number;
}

export interface TransactionSummary {
  currentOdometer: number;
  date: string;
  distance: number;
  fuelType: string;
  id: string;
  previousOdometer: number;
}

export interface TransactionLocation {
  id: string;
  latitude: number;
  longitude: number;
}

export interface TransactionDriver {
  department: string;
  id: string;
  name: string;
  nip: string;
}

export interface TransactionAsset {
  fuelType: string;
  id: string;
  licensePlate: string;
  model: string;
}

export interface TransactionDetail {
  asset: TransactionAsset;
  driver: TransactionDriver;
  evidence: TransactionEvidence;
  id: string;
  location: TransactionLocation;
  transactionSummary: TransactionSummary;
}

export const mockTransactionDetails: Record<string, TransactionDetail> = {
  "1": {
    id: "1",
    evidence: {
      id: "ev-1",
      odometerPhotoUrl: "/images/dashboard.jpeg",
      invoicePhotoUrl: "/images/struk.webp",
      gasStationPhotoUrl: "/images/spbu.jpg",
      odometer: 456_788,
      totalPaid: 3_500_000,
      litrePurchased: 45.5,
    },
    transactionSummary: {
      id: "ts-1",
      date: "2026-03-13T08:30:00+07:00",
      fuelType: "pertalite",
      previousOdometer: 454_322,
      currentOdometer: 456_788,
      distance: 246,
    },
    location: {
      id: "loc-1",
      longitude: 106.8456,
      latitude: -6.2088,
    },
    driver: {
      id: "drv-1",
      nip: "NIP-001",
      name: "Ahmad Santoso",
      department: "Logistik",
    },
    asset: {
      id: "ast-1",
      licensePlate: "B 1234 ABC",
      model: "Toyota Innova",
      fuelType: "pertalite",
    },
  },
  "2": {
    id: "2",
    evidence: {
      id: "ev-2",
      odometerPhotoUrl: "/images/dashboard.jpeg",
      invoicePhotoUrl: "/images/struk.webp",
      gasStationPhotoUrl: "/images/spbu.jpg",
      odometer: 321_000,
      totalPaid: 2_800_000,
      litrePurchased: 36.2,
    },
    transactionSummary: {
      id: "ts-2",
      date: "2026-03-13T09:15:00+07:00",
      fuelType: "pertamax",
      previousOdometer: 317_800,
      currentOdometer: 321_000,
      distance: 320,
    },
    location: {
      id: "loc-2",
      longitude: 106.8612,
      latitude: -6.1751,
    },
    driver: {
      id: "drv-2",
      nip: "NIP-002",
      name: "Budi Prakoso",
      department: "Pengiriman",
    },
    asset: {
      id: "ast-2",
      licensePlate: "D 5678 DEF",
      model: "Mitsubishi L300",
      fuelType: "pertamax",
    },
  },
};

export const getTransactionDetail = (id: string) => {
  return mockTransactionDetails[id] || mockTransactionDetails["1"];
};
