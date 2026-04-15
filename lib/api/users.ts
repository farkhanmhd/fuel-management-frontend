import { notFound } from "next/navigation";
import { api } from "../axios/server";
import type { elysia } from "../elysia";
import type { AddUserSchema, UpdateUserDataSchema } from "../schemas/users";
import type { PaginationQuery } from "../utils";
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
  static async getUsers(query: PaginationQuery) {
    const response = await api.get<GetUsersResponse>("/api/users", {
      params: query,
    });

    const data = response.data;

    if (!data) {
      notFound();
    }

    const { users, total } = data.data;

    return { users, total };
  }

  static async getUserById(userId: string) {
    const response = await api.get<GetUserByIdResponse>(`/api/users/${userId}`);

    const data = response.data;

    if (!data) {
      notFound();
    }

    return data.data.user;
  }

  static async addUser(body: AddUserSchema) {
    const response = await api.post<CreatedUserResponse>(
      "/api/users/create",
      body
    );

    return response.data;
  }

  static async updateUserData(params: UpdateUserDataParams) {
    const response = await api.patch(
      `/api/users/${params.userId}/update`,
      params.body
    );

    return response.data;
  }

  static async resetUserPassword(userId: string) {
    const response = await api.post("/api/users/resetpassword", {
      userId,
    });

    return response.data;
  }

  static async getUserPermissions(userId: string) {
    const { data } = await api.get<UserPermissionsResponse>(
      `/api/users/${userId}/permissions`
    );

    return data.data.permissions;
  }
}
