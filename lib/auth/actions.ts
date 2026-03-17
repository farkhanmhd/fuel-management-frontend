"use server";

import { cookies } from "next/headers";
import type { LoginSchema } from "@/components/auth/login-form";
import { authAxios } from "@/lib/axios";
import type { AuthApiResponse } from "./utils";

interface LoginData {
  accessToken: string;
  token_type: string;
  user: {
    uuid: string;
    username: string;
    name: string;
  };
}

export async function loginAction(
  credentials: LoginSchema
): Promise<AuthApiResponse<LoginData>> {
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
}

export async function logoutAction() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("auth-token")?.value;

  if (!accessToken) {
    return;
  }

  const response = await authAxios.post("/api/v1/logout", null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 200 && response.data.meta.status === "success") {
    cookieStore.delete("auth-token");

    return response.data.meta;
  }
}
