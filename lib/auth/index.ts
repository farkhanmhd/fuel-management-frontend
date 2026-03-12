import { unstable_cache as cache } from "next/cache";
import { authAxios } from "../axios";

export const verifyTokenCached = cache(
  async (token: string): Promise<boolean> => {
    console.log("hit");
    try {
      const response = await authAxios.get("/api/v1/verify-token", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.valid === true;
    } catch {
      return false;
    }
  },
  ["verify-token"],
  { revalidate: 300, tags: ["verify-token"] }
);
