import { notFound } from "next/navigation";
import { withAuth } from "../auth/utils";
import { api } from "../axios/server";
import type { elysia } from "../elysia";
import type { AddUserSchema, UpdateUserDataSchema } from "../schemas/users";
import type { BaseAPIResponse } from "./utils";

interface CreatedUserResponse extends BaseAPIResponse {
  data: {
    created_at: string;
    name: string;
    updated_at: string;
    username: string;
    uuid: string;
  };
}

export type GetUsersResponse = NonNullable<
  Awaited<ReturnType<typeof elysia.api.users.get>>
>["data"];

type UsersParamReturn = ReturnType<typeof elysia.api.users>;
type GetUserByIdResponse = Awaited<ReturnType<UsersParamReturn["get"]>>["data"];
type UserList = NonNullable<GetUsersResponse>["data"]["users"][number];
export interface UserListData extends UserList {
  id: string;
}
export type UserData = NonNullable<GetUserByIdResponse>["data"]["user"];

export type UserPermissionsResponse = NonNullable<
  Awaited<ReturnType<UsersParamReturn["permissions"]["get"]>>["data"]
>;

export type UserPermission =
  UserPermissionsResponse["data"]["permissions"][number];

interface UpdateUserDataParams {
  body: UpdateUserDataSchema;
  userId: string;
}

export abstract class UsersApi {
  static async getUsers() {
    const { data } = await withAuth(async (token: string) => {
      const response = await api.get<GetUsersResponse>("/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    });

    if (!data) {
      notFound();
    }

    const users = data.data.users;

    return users;
  }

  static async getUserById(userId: string) {
    const { data } = await withAuth(async (token: string) => {
      const response = await api.get<GetUserByIdResponse>(
        `/api/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    });

    if (!data) {
      notFound();
    }

    return data.data.user;
  }

  static async addUser(body: AddUserSchema) {
    const result = await withAuth(async (token) => {
      const response = await api.post<CreatedUserResponse>(
        "/api/users/create",
        body,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      return response.data;
    });

    return result;
  }

  static async updateUserData(params: UpdateUserDataParams) {
    const result = await withAuth(async (token) => {
      const response = await api.patch(
        `/api/users/${params.userId}/update`,
        params.body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    });

    return result;
  }

  static async resetUserPassword(userId: string) {
    const result = await withAuth(async (token) => {
      const response = await api.post(
        "/api/users/resetpassword",
        {
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    });

    return result;
  }

  static async getUserPermissions(userId: string) {
    const { data } = await api.get<UserPermissionsResponse>(
      `/api/users/${userId}/permissions`
    );

    return data.data.permissions;
  }
}
