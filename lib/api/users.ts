import { cacheTag } from "next/cache";
import { cacheLife } from "next/dist/server/use-cache/cache-life";
import type { AuthApiResponse } from "../auth/utils";
import { withAuth } from "../auth/utils";
import { authAxios } from "../axios";

export type UserDataResponse = {
  uuid: string;
  username: string;
  name: string;
  created_at: string;
  updated_at: string;
  status: string;
  password_changed_at: string | null;
};

export interface UserData extends UserDataResponse {
  id: string;
}

export const fetchCachedUsers = async (token: string) => {
  "use cache";
  cacheTag("users");
  cacheLife({
    stale: 0,
    revalidate: 60 * 15,
    expire: 60 * 15,
  });

  const response = await authAxios.get<AuthApiResponse<UserDataResponse[]>>(
    "/api/v1/userlist",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.data;
};

export abstract class UsersApi {
  static getUsers() {
    return withAuth(fetchCachedUsers);
  }

  static getUserById(userId: string) {
    return withAuth(async (token: string) => {
      const response = await authAxios.get<AuthApiResponse<UserDataResponse>>(
        `/api/v1/showuser/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.data;
    });
  }
}
