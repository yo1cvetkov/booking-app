import axios from "@/lib/api";
import { type TRegister, type TLogin } from "@/types/auth";
import { queryOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

const register = ({ data }: { data: TRegister }): Promise<AxiosResponse<unknown>> => axios.post("/api/users/register", data);

const validateToken = () =>
  axios
    .get("/api/auth/me", {
      withCredentials: true,
    })
    .then((response) => response.data);

const login = ({ data }: { data: TLogin }): Promise<AxiosResponse<unknown>> =>
  axios.post("/api/auth/login", data, {
    withCredentials: true,
  });

const logout = (): Promise<AxiosResponse<unknown>> =>
  axios.post("/api/auth/logout", {
    withCredentials: true,
  });

const userQueryOptions = queryOptions({
  queryKey: ["user"],
  queryFn: validateToken,
  staleTime: Infinity,
});

export { register, validateToken, userQueryOptions, login, logout };
