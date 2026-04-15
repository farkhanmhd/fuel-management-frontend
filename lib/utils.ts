import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const paginationQuerySchema = z.object({
  page: z.optional(z.nullable(z.number().min(1).default(1))),
  limit: z.optional(z.nullable(z.number().min(10).default(20))),
  search: z.optional(z.nullable(z.string().default(""))),
});

export type PaginationQuery = z.infer<typeof paginationQuerySchema>;
