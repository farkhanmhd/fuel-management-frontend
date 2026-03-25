import type { elysia } from "@/lib/elysia";
import { withAuth } from "../auth/utils";
import { api } from "../axios";

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

export abstract class DealersApi {
  static async getDealers() {
    const { data } = await withAuth(fetchDealers);

    return { data };
  }
}
