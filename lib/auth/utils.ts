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

export interface AuthApiError {
  code: number | null;
  message: string;
  status: number | null;
}

export interface ApiError {
  message: string;
  status: string;
}

export const apiRequest = async <T>(
  fn: () => Promise<T>
): Promise<
  { data: T; error: null } | { data: null; error: AuthApiError | ApiError }
> => {
  try {
    return { data: await fn(), error: null };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return {
        data: null,
        error: {
          message: err.response?.data?.message,
          status: err.response?.status ?? null,
          code: err.response?.data?.meta?.code,
        },
      };
    }
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
