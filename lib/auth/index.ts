import axios from "axios";

export const authAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_API_URL,
  headers: { "Content-Type": "application/json" },
});

authAxios.interceptors.request.use(async (config) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_FRONTEND_URL}/api/auth/token`
  );

  if (res.ok) {
    const { token } = await res.json();
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const verifyToken = async (token: string): Promise<boolean> => {
  try {
    const response = await authAxios.get("/api/v1/verify-token", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.valid === true;
  } catch {
    return false;
  }
};
