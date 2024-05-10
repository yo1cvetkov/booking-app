import { createContext } from "react";

import { validateToken } from "@/services/auth/apiAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { login as loginApi } from "@/services/auth/apiAuth";
import { toast } from "sonner";
import { AxiosError } from "axios";

type TLogin = {
  email: string;
  password: string;
};

export interface IAuthContext {
  isLoadingUser: boolean;
  getCurrentUser: () => Promise<{ userId: string } | null>;
  isAuthenticated?: boolean;
  login: (data: TLogin) => void;
  logout: () => void;
  user?: string | null;
  isUserError: boolean;
  isLogingIn: boolean;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // const [user, setUser] = useState<TUser | null>(null);
  // const [isLoadingUser, setIsLoadingUser] = useState<boolean>(false);
  // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const queryClient = useQueryClient();

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

  const { data, isError, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    staleTime: Infinity,
  });

  const { mutate: loginMutate, isPending: isLogingIn } = useMutation({
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

  const login = (data: TLogin) => {
    loginMutate({ data });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoadingUser: isLoading,
        isUserError: isError,
        user: data?.userId,
        login,
        logout,
        getCurrentUser,
        isLogingIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
