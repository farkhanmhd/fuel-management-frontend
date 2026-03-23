import { authAxios } from "../axios";

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
