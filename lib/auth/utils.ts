import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";

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
  const token = cookieStore.get("auth-token")?.value;
  if (!token) {
    redirect("/login");
  }

  return token;
});

export interface ApiError {
  code: number | null; // from your response meta
  message: string;
  status: number | null;
}

export const withAuth = async <T>(
  fn: (token: string) => Promise<T>
): Promise<{ data: T; error: null } | { data: null; error: ApiError }> => {
  try {
    const data = await fn(await getAccessToken());
    return { data, error: null };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(err.response?.data);
      return {
        data: null,
        error: {
          message: err.response?.data?.message,
          status: err.response?.status ?? null,
          code: err.response?.data?.meta?.code,
        },
      };
    }

    console.error(err instanceof Error ? err.message : String(err));
    return {
      data: null,
      error: {
        message: err instanceof Error ? err.message : String(err),
        status: null,
        code: null,
      },
    };
  }
};
