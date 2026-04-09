import axios from "axios";

export const clientApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
});

clientApi.interceptors.request.use(async (config) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_FRONTEND_URL}/api/auth/token`
  );

  if (res.ok) {
    const { token } = await res.json();
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
