import { createContext, useState } from "react";

import { type TUser } from "@/types/auth";
import { validateToken } from "@/services/auth/apiAuth";
import { queryOptions, useQuery } from "@tanstack/react-query";

type TLogin = {
  email: string;
  password: string;
};

export interface IAuthContext {
  isLoadingUser: boolean;
  getCurrentUser: () => Promise<{ userId: string } | null>;
  login: (data: TLogin) => void;
  logout: () => void;
  user: TUser | null;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<TUser | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(false);

  const logout = () => {};

  const getCurrentUser = async () => {
    try {
      const res: { userId: string } = await validateToken();

      return res;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const login = (data: TLogin) => {
    console.log(data);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoadingUser,
        user,
        login,
        logout,
        getCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
