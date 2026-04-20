import { z } from "zod";

// Used for form validation only (no transform)
export const createAssetInput = z.object({
  modelName: z.string().min(1, "Model is required"),
  plateCode: z.string().min(1, "Code is required"),
  plateNumber: z
    .string()
    .min(1, "Number is required")
    .max(4, "Max 4 digits")
    .regex(/^[1-9]\d*$/, "Must be digits and cannot start with 0"),
  plateSeries: z
    .string()
    .max(3, "Max 3 letters")
    .regex(/^[a-zA-Z]*$/, "Must be letters"),
  year: z
    .number()
    .int("Year must be a valid integer")
    .min(1990, "Year must be at least 1990")
    .max(new Date().getFullYear(), "Year cannot be in the future"),
  fuelType: z.enum(["bensin", "solar"]),
  startingKiloMeter: z.number().min(0, "Starting kilometer must be at least 0"),
  dealerId: z
    .number({ error: "Dealer is Required" })
    .min(1, "Dealer is Required"),
});

export const createAssetSchema = createAssetInput
  .omit({ plateCode: true, plateNumber: true, plateSeries: true })
  .extend({
    licensePlate: z.string().min(1, "License plate is required"),
  });

export type CreateAssetInput = z.infer<typeof createAssetInput>;
export type CreateAssetSchema = z.infer<typeof createAssetSchema>;
