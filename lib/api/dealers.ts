import type { elysia } from "@/lib/elysia";
import { withAuth } from "../auth/utils";
import { api } from "../axios";
import type { CreateAssetSchema, CreateDriverSchema } from "../schemas/dealers";

export type DealerList = NonNullable<
  Awaited<ReturnType<typeof elysia.api.dealers.get>>["data"]
>["data"]["dealers"][number];

const fetchDealers = async (token: string) => {
  const response = await api.get<{ data: { dealers: DealerList[] } }>(
    "/api/dealers",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data.dealers;
};

const fetchDealerDetail = async (token: string, dealerId: string) => {
  const response = await api.get<{
    data: {
      dealer: {
        id: string;
        code: string;
        name: string;
        area: string;
      };
    };
  }>(`/api/dealers/${dealerId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data.dealer;
};

const fetchDealerTransactions = async (token: string, dealerId: string) => {
  const response = await api.get<{
    data: {
      transactions: {
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
        distanceCovered: number;
        kiloMeterPerLitre: number;
      }[];
    };
  }>(`/api/dealers/${dealerId}/transactions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data.transactions;
};

const fetchDealerAssets = async (token: string, dealerId: string) => {
  const response = await api.get<{
    data: {
      assets: {
        id: string;
        driverName: string;
        modelName: string;
        licensePlate: string;
        assetYear: number;
        totalKiloMeter: number;
        totalLiter: number;
        averageKilometerPerLitre: number;
      }[];
    };
  }>(`/api/dealers/${dealerId}/assets`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data.assets;
};

const fetchDealerDrivers = async (token: string, dealerId: string) => {
  const response = await api.get<{
    data: {
      drivers: {
        id: string;
        nip: string;
        driverName: string;
        department: string;
        totalAsset: number;
      }[];
    };
  }>(`/api/dealers/${dealerId}/drivers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data.drivers;
};

const addDriver = async (
  token: string,
  dealerId: string,
  body: CreateDriverSchema
) => {
  const response = await api.post<{ data: { driverId: string } }>(
    `/api/dealers/${dealerId}/drivers`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log(response);

  return response.data.data.driverId;
};

const addAsset = async (
  token: string,
  dealerId: string,
  body: CreateAssetSchema
) => {
  const response = await api.post<{ data: { assetId: string } }>(
    `/api/dealers/${dealerId}/assets`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.data.assetId;
};

export type DealerDetail = Awaited<ReturnType<typeof fetchDealerDetail>>;
export type DealerTransaction = Awaited<
  ReturnType<typeof fetchDealerTransactions>
>[number];
export type DealerAsset = Awaited<ReturnType<typeof fetchDealerAssets>>[number];
export type DealerDriver = Awaited<
  ReturnType<typeof fetchDealerDrivers>
>[number];

export abstract class DealersApi {
  static async getDealers() {
    const { data } = await withAuth(fetchDealers);

    return { data };
  }

  static async getDealerDetail(dealerId: string) {
    const { data } = await withAuth((token) =>
      fetchDealerDetail(token, dealerId)
    );

    return { data };
  }

  static async getDealerTransactions(dealerId: string) {
    const { data } = await withAuth((token) =>
      fetchDealerTransactions(token, dealerId)
    );

    return { data };
  }

  static async getDealerAssets(dealerId: string) {
    const { data } = await withAuth((token) =>
      fetchDealerAssets(token, dealerId)
    );

    return { data };
  }

  static async getDealerDrivers(dealerId: string) {
    const { data } = await withAuth((token) =>
      fetchDealerDrivers(token, dealerId)
    );

    return { data };
  }

  static async addDriver(dealerId: string, body: CreateDriverSchema) {
    const result = await withAuth((token) => addDriver(token, dealerId, body));

    return result;
  }

  static async addAsset(dealerId: string, body: CreateAssetSchema) {
    const result = await withAuth((token) => addAsset(token, dealerId, body));

    return result;
  }
}
