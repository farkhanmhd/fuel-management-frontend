import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";

export const getAccessToken = cache(async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value;
  if (!token) {
    redirect("/login");
  }
  return token;
});
