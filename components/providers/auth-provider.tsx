"use client";

import { useQuery } from "@tanstack/react-query";
import { createContext, type ReactNode, useContext } from "react";
import type { SessionData } from "@/lib/auth/session";

interface AuthContextType {
  session: SessionData | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const fetchSession = async (): Promise<SessionData | null> => {
  const response = await fetch("/api/auth/token");
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data.session;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: fetchSession,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return (
    <AuthContext.Provider value={{ session: session ?? null }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
