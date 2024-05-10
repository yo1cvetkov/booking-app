import axios from "@/lib/api";
import { TRegister } from "@/types/auth";
import { AxiosResponse } from "axios";

const register = ({ data }: { data: TRegister }): Promise<AxiosResponse<unknown>> => axios.post("/api/users/register", data);

const validateToken = () =>
  axios
    .get("/api/auth/me", {
      withCredentials: true,
    })
    .then((response) => response.data);

export { register, validateToken };
