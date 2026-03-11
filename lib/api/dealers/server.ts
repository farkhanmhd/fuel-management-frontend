import { sleep } from "bun";
import { cacheLife, cacheTag } from "next/cache";
import { serverApi, withAuth } from "@/lib/axios/server";
import type { elysia } from "@/lib/elysia";

export type DealerList = NonNullable<
  Awaited<ReturnType<typeof elysia.api.dealers.get>>["data"]
>["data"]["dealers"][number];

const fetchDealers = async (token: string): Promise<DealerList[]> => {
  "use cache";
  cacheTag("dealers");
  cacheLife("days");

  await sleep(3000);
  const response = await serverApi.get("/api/dealers", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.data.dealers;
};

export const getDealers = (): Promise<DealerList[]> => {
  return withAuth(fetchDealers);
};
