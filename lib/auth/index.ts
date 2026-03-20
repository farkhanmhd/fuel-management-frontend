import { unstable_cache as cache } from "next/cache";
import { authAxios } from "../axios";

export const verifyToken = cache(
  async (token: string): Promise<boolean> => {
    try {
      const response = await authAxios.get("/api/v1/verify-token", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.valid === true;
    } catch {
      return false;
    }
  },
  ["token-status"],
  {
    tags: ["token-status"],
    revalidate: 300,
  }
);
