import { clientApi } from "../axios/client";
import type { elysia } from "../elysia";
import type { CreateAssetSchema } from "../schemas/assets";

export type AssetDetail = NonNullable<
  NonNullable<Awaited<ReturnType<typeof elysia.api.assets.get>>>["data"]
>["data"]["assets"][number];

export abstract class AssetsApi {
  static async getAssets() {
    const response = await clientApi.get<{ data: { assets: AssetDetail[] } }>(
      "/api/assets"
    );
    return response.data.data.assets;
  }

  static async createAsset(body: CreateAssetSchema) {
    const response = await clientApi.post<{ data: { assetId: string } }>(
      "/api/assets",
      body
    );
    return response.data.data.assetId;
  }
}
