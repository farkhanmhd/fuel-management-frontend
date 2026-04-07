import { z } from "zod";

export const addPermissionSchema = z.object({
  permission: z.string().min(3, "Permission must be at least 3 characters"),
});

export type AddPermissionSchema = z.infer<typeof addPermissionSchema>;
