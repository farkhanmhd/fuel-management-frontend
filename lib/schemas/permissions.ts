import { z } from "zod";

export const permissionType = ["create", "read", "update", "delete"] as const;

export const permissionSchema = z.object({
  id: z.optional(z.nullable(z.string())),
  type: z.enum(permissionType),
  resource: z.string().min(3, "Resource must be at least 3 characters"),
  note: z.optional(z.nullable(z.string())),
});

export type PermissionSchema = z.infer<typeof permissionSchema>;
