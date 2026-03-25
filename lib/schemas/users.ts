import { z } from "zod";

export const addUserSchema = z.object({
  username: z.string().min(1, "Username wajib diisi"),
  name: z.string().min(1, "Nama wajib diisi"),
  password: z.string().min(8, "Password minimal 8 karakter"),
});

export type AddUserSchema = z.infer<typeof addUserSchema>;

export const updateUserSchema = z.object({
  username: z.string().min(1, "Username wajib diisi"),
  name: z.string().min(1, "Nama wajib diisi"),
});

export type UpdateUserDataSchema = z.infer<typeof updateUserSchema>;
