import type { elysia } from "@/lib/elysia";
import { clientApi } from "../axios/client";
import type { CreateAssetSchema, CreateDriverSchema } from "../schemas/dealers";

export type DealerList = NonNullable<
  Awaited<ReturnType<typeof elysia.api.dealers.get>>["data"]
>["data"]["dealers"][number];

export interface DealerDetail extends Omit<DealerList, "id"> {
  id: string;
}

export type DealerTransaction = {
  id: string;
  transactionTime: string;
  driverName: string;
  licensePlate: string;
  modelName: string;
  productVariant: string;
  transactionTotal: number;
  pricePerLitre: number;
  litrePurchased: number;
  previousKilometer: number;
  currentKilometer: number;
  distanceCovered: number | null;
  kiloMeterPerLitre: number | null;
};

export type DealerAsset = {
  id: string;
  driverName: string;
  modelName: string;
  licensePlate: string;
  assetYear: number;
  totalKiloMeter: number;
  totalLiter: number;
  averageKilometerPerLitre: number;
};

export type DealerDriver = {
  id: string;
  nip: string;
  driverName: string;
  department: string;
  totalAsset: number;
};

export abstract class DealersApi {
  static async getDealers() {
    const response = await clientApi.get<{ data: { dealers: DealerList[] } }>(
      "/api/dealers"
    );
    return response.data.data.dealers;
  }

  static async getDealerDetail(dealerId: string) {
    const response = await clientApi.get<{
      data: {
        dealer: DealerDetail;
      };
    }>(`/api/dealers/${dealerId}`);

    return response.data.data.dealer;
  }

  static async getDealerTransactions(dealerId: string) {
    const response = await clientApi.get<{
      data: {
        transactions: DealerTransaction[];
      };
    }>(`/api/dealers/${dealerId}/transactions`);
    return response.data.data.transactions;
  }

  static async getDealerAssets(dealerId: string) {
    const response = await clientApi.get<{
      data: {
        assets: DealerAsset[];
      };
    }>(`/api/dealers/${dealerId}/assets`);
    return response.data.data.assets;
  }

  static async getDealerDrivers(dealerId: string) {
    const response = await clientApi.get<{
      data: {
        drivers: DealerDriver[];
      };
    }>(`/api/dealers/${dealerId}/drivers`);
    return response.data.data.drivers;
  }

  static async addDriver(dealerId: string, body: CreateDriverSchema) {
    const response = await clientApi.post<{ data: { driverId: string } }>(
      `/api/dealers/${dealerId}/drivers`,
      body
    );

    return response.data.data.driverId;
  }

  static async addAsset(dealerId: string, body: CreateAssetSchema) {
    const response = await clientApi.post<{ data: { assetId: string } }>(
      `/api/dealers/${dealerId}/assets`,
      body
    );

    return response.data.data.assetId;
  }
}
