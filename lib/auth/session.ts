import type { SessionOptions } from "iron-session";

export interface SessionData {
  accessToken: string;
  isLoggedIn: boolean;
  lastVerifiedAt: number;
  name: string;
  userId: string;
  username: string;
}

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET as string,
  cookieName: "alfa-fmis-session",
  ttl: 60 * 60 * 2,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
  },
};
