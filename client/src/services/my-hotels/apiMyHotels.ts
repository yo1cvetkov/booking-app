import axios from "@/lib/api";
import { AxiosResponse } from "axios";

const createMyHotel = ({ data }: { data: FormData }): Promise<AxiosResponse<unknown>> =>
  axios.post("/api/my-hotels", data, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export { createMyHotel };
