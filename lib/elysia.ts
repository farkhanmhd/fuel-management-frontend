import { treaty } from "@elysiajs/eden";
import type { App } from "@/server";

export const elysia = treaty<App>(
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"
);
