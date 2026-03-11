// lib/axios.ts
import axios from "axios";
import { getAccessToken } from "../auth/utils";

export const serverApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
});

export const authAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_API_URL,
  headers: { "Content-Type": "application/json" },
});

export const withAuth = async <T>(
  fn: (token: string) => Promise<T>
): Promise<T> => {
  const token = await getAccessToken();
  return fn(token);
};
