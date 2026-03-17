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

export const withAuth = async <T>(
  fn: (token: string) => Promise<T>
): Promise<T> => {
  const token = await getAccessToken();
  return fn(token);
};
