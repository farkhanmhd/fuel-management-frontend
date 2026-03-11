import { cookies } from "next/headers";
import { authAxios } from "../axios";

export abstract class AuthService {
  static async verifyToken(token: string): Promise<boolean> {
    const cookieStore = await cookies();
    try {
      const response = await authAxios.get("/api/v1/verify-token", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.data.valid) {
        cookieStore.delete("auth-token");
        return false;
      }

      return response.data.valid;
    } catch (error) {
      console.error(error);
      cookieStore.delete("auth-token");
      return false;
    }
  }
}
