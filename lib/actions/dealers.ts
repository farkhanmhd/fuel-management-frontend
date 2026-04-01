"use server";

import { DealersApi } from "../api/dealers";
import type { CreateAssetSchema, CreateDriverSchema } from "../schemas/dealers";

export const createDriverAction = async (
  dealerId: string,
  body: CreateDriverSchema
) => {
  const result = await DealersApi.addDriver(dealerId, body);
  return result;
};

export const createAssetAction = async (
  dealerId: string,
  body: CreateAssetSchema
) => {
  const result = await DealersApi.addAsset(dealerId, body);
  return result;
};
