import { notFound } from "next/navigation";
import { withAuth } from "../auth/utils";
import { api, authAxios } from "../axios";
import type { ChangePasswordSchema } from "../schemas/account";
import type { UserData } from "./users";
import type { BaseAPIResponse } from "./utils";

type GetAccountResponse = {
  valid: true;
  user: UserData;
};

export abstract class AccountApi {
  static async getMyAccount() {
    const { data } = await withAuth<GetAccountResponse>(async (token) => {
      const response = await authAxios.get<GetAccountResponse>(
        "/api/v1/verify-token",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      return response.data;
    });

    if (!data) {
      notFound();
    }

    return data;
  }

  static async changePassword(body: ChangePasswordSchema) {
    const result = await withAuth(async (token) => {
      const { confirm_password, ...payload } = body;
      const { data } = await api.patch<BaseAPIResponse>(
        "/api/account",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data;
    });

    return result;
  }
}
