import axios from "axios";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";
import { type SessionData, sessionOptions } from "./session";

export interface AuthApiResponse<T> {
  data: T;
  meta: {
    code: number;
    status: string;
    message: string;
  };
}

export const getAccessToken = cache(async () => {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(
    cookieStore,
    sessionOptions
  );

  if (!session.accessToken) {
    redirect("/login");
  }

  return session.accessToken;
});

export interface AuthApiError {
  code: number | null;
  message: string;
  status: number | null;
}

export interface ApiError {
  message: string;
  status: string;
}

export const withAuth = async <T>(
  fn: (token: string) => Promise<T>
): Promise<
  { data: T; error: null } | { data: null; error: ApiError | AuthApiError }
> => {
  try {
    const data = await fn(await getAccessToken());
    return { data, error: null };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return {
        data: null,
        error: {
          message: err.response?.data?.message,
          status: err.response?.data?.status ?? null,
          code: err.response?.data?.code,
        },
      };
    }

    return {
      data: null,
      error: {
        message: err instanceof Error ? err.message : String(err),
        status: err instanceof Error ? err.name : String(err),
      },
    };
  }
};
