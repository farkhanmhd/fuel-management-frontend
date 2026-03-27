"use server";

import { AccountApi } from "../api/account";
import type { ChangePasswordSchema } from "../schemas/account";

export const changePasswordAction = async (data: ChangePasswordSchema) => {
  const result = await AccountApi.changePassword(data);

  return result;
};
