import { z } from "zod";

export const createDriverSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  name: z.string().min(3, "Name must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  nip: z.string().min(1, "NIP is required"),
  department: z.string().min(1, "Department is required"),
});

export type CreateDriverSchema = z.infer<typeof createDriverSchema>;

export const createAssetSchema = z.object({
  model: z.string().min(1, "Model is required"),
  licensePlate: z.string().min(1, "License plate is required"),
  year: z
    .number()
    .min(1900, "Year must be valid")
    .max(2100, "Year must be valid"),
  fuelType: z.enum(["bensin", "solar"], {
    message: "Fuel type must be 'bensin' or 'solar'",
  }),
  startingKiloMeter: z.number().min(0, "Starting kilometer must be positive"),
  status: z.enum(["mds", "neq", "sewa"]).optional(),
  statusDetail: z.string().optional(),
});

export type CreateAssetSchema = z.infer<typeof createAssetSchema>;
