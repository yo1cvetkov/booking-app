import { createContext } from "react";

import { validateToken } from "@/services/auth/apiAuth";
import { UseMutateFunction, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { login as loginApi, logout as logoutApi } from "@/services/auth/apiAuth";
import { toast } from "sonner";
import { AxiosError, AxiosResponse } from "axios";

type TLogin = {
  email: string;
  password: string;
};

type TLoginMutationFn = UseMutateFunction<
  AxiosResponse<unknown, unknown>,
  Error,
  {
    data: TLogin;
  },
  unknown
>;

type TLogoutMutationFn = UseMutateFunction<AxiosResponse<unknown, unknown>, Error, void, unknown>;

export interface IAuthContext {
  isLoadingUser: boolean;
  getCurrentUser: () => Promise<{ userId: string } | null>;
  login: TLoginMutationFn;
  logout: TLogoutMutationFn;
  user?: string | null;
  isUserError: boolean;
  isLogingIn: boolean;
  isLoggingOut: boolean;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();

  const getCurrentUser = async () => {
    try {
      const res: { userId: string } = await validateToken();

      return res;
    } catch (error) {
      console.error(error);

      return null;
    }
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    staleTime: Infinity,
  });

  const { mutate: login, isPending: isLogingIn } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Logged in successfully");
    },
    onError: (error) => {
      console.error(error);

      if (error instanceof AxiosError) {
        switch (error.response?.status) {
          case 404:
            toast.error("User doesn't exist.");
            break;
          case 400:
            toast.error("Invalid credentials.");
            break;
          case 500:
            toast.error("Internal server error.");
            break;
          default:
            toast.error("Failed to login.");
            break;
        }
      }
    },
  });

  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Logged out successfully.");
    },
    onError: () => {
      toast.error("Failed to log out.");
    },
  });

  return (
    <AuthContext.Provider
      value={{
        isLoadingUser: isLoading,
        isUserError: isError,
        user: data?.userId,
        login,
        logout,
        isLoggingOut,
        getCurrentUser,
        isLogingIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
