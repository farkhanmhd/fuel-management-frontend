"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { LoginSchema } from "@/components/auth/login-form";
import { authAxios } from "../axios";
import type { AddUserSchema } from "./schema";
import { type AuthApiResponse, withAuth } from "./utils";

interface LoginData {
  accessToken: string;
  token_type: string;
  user: {
    uuid: string;
    username: string;
    name: string;
  };
}

export const loginAction = async (
  credentials: LoginSchema
): Promise<AuthApiResponse<LoginData>> => {
  const response = await authAxios.post<AuthApiResponse<LoginData>>(
    "/api/v1/login",
    credentials
  );

  const { accessToken } = response.data.data;

  const cookieStore = await cookies();
  cookieStore.set("auth-token", accessToken, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 2,
  });

  return response.data;
};

export const logoutAction = async () =>
  withAuth(async (token) => {
    const response = await authAxios.post("/api/v1/logout", null, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200 && response.data.meta.status === "success") {
      const cookieStore = await cookies();
      cookieStore.delete("auth-token");
      return response.data.meta;
    }
  });

export const resetUserPasswordAction = async (userId: string) =>
  withAuth(async (token) => {
    const response = await authAxios.post<AuthApiResponse<{ data: null }>>(
      "/api/v1/resetpassword",
      { uuid: userId },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.status === 401) {
      redirect("/login");
    }

    return response.data.meta;
  });

type AddUserResponse = {
  data: {
    uuid: string;
    username: string;
    name: string;
    updated_at: string;
    created_at: string;
  };
};

export const addUserAction = async (body: AddUserSchema) =>
  withAuth(async (token) => {
    const response = await authAxios.post<AuthApiResponse<AddUserResponse>>(
      "/api/v1/createuser",
      body,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.data.meta.code === 200) {
      revalidateTag("users", "max");
    }

    return response.data.meta;
  });
