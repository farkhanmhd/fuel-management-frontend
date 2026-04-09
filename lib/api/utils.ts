import { cacheTag } from "next/cache";
import { cacheLife } from "next/dist/server/use-cache/cache-life";

export interface BaseAPIResponse {
  message: string;
  status: string;
}

export const fetchPermissions = async (token: string) => {
  "use cache";
  cacheLife("days");
  cacheTag("permissions");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/permissions`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const json = await res.json();

  return json;
};
