import { z } from "zod";

export const changePasswordSchema = z
  .object({
    current_password: z.string().min(1, "Password lama wajib diisi"),
    new_password: z.string().min(6, "Password baru minimal 6 karakter"),
    confirm_password: z.string().min(1, "Konfirmasi password wajib diisi"),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Konfirmasi password tidak sesuai",
    path: ["confirm_password"],
  });

export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;
