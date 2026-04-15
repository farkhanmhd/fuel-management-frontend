import { notFound } from "next/navigation";
import { authAxios } from "../auth";
import { withAuth } from "../auth/utils";
import { api } from "../axios/server";
import type { ChangePasswordSchema } from "../schemas/account";
import type { UserData } from "./users";
import type { BaseAPIResponse } from "./utils";

type GetAccountResponse = {
  valid: true;
  user: UserData;
};

export abstract class AccountApi {
  static async getMyAccount() {
    const { data } = await withAuth(async (token) => {
      const response = await authAxios.get<GetAccountResponse>(
        "/api/v1/verify-token",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      return data;
    });

    if (!data) {
      notFound();
    }

    return data;
  }

  static async changePassword(body: ChangePasswordSchema) {
    const { confirm_password, ...payload } = body;
    const result = await api.patch<BaseAPIResponse>("/api/account", payload);

    return result.data;
  }
}
