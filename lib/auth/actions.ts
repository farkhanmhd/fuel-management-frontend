"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import type { LoginSchema } from "@/components/auth/login-form";
import { authAxios } from "@/lib/auth";

import { type SessionData, sessionOptions } from "./session";
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

export const loginAction = async (
  credentials: LoginSchema
): Promise<AuthApiResponse<LoginData>> => {
  const response = await authAxios.post<AuthApiResponse<LoginData>>(
    "/api/v1/login",
    credentials
  );

  const { accessToken, user } = response.data.data;

  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions
  );
  session.userId = user.uuid;
  session.username = user.username;
  session.name = user.name;
  session.accessToken = accessToken;
  session.isLoggedIn = true;
  session.lastVerifiedAt = Math.floor(Date.now() / 1000);
  await session.save();

  return response.data;
};

export const logoutAction = async () => {
  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions
  );

  const response = await authAxios.post("/api/v1/logout", null, {
    headers: { Authorization: `Bearer ${session.accessToken}` },
  });

  if (response.status === 200 && response.data.meta.status === "success") {
    session.destroy();
    return response.data.meta;
  }
};
