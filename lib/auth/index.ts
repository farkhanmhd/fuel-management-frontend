import axios from "axios";

export const authAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_API_URL,
  headers: { "Content-Type": "application/json" },
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
