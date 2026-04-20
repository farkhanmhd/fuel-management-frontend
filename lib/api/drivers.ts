import { clientApi } from "../axios/client";
import type { elysia } from "../elysia";
import type { PaginationQuery } from "../utils";

export type Driver = NonNullable<
  NonNullable<Awaited<ReturnType<typeof elysia.api.drivers.get>>>["data"]
>["data"]["drivers"][number];

interface DriversResponse {
  data: {
    drivers: Driver[];
    total: number;
  };
  message: string;
  status: string;
}

export class DriversApi {
  static async getDrivers(query: PaginationQuery) {
    const response = await clientApi.get<DriversResponse>("/api/drivers", {
      params: query,
    });

    const data = response.data;

    if (!data) {
      throw new Error("Failed to load drivers");
    }

    const { drivers, total } = data.data;

    return { drivers, total };
  }
}
