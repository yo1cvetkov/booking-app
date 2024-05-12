import axios from "@/lib/api";
import { type THotel } from "@/types/hotel";
import { AxiosResponse } from "axios";

const createMyHotel = ({ data }: { data: FormData }): Promise<AxiosResponse<unknown>> =>
  axios.post("/api/my-hotels", data, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

const getMyHotels = () =>
  axios
    .get<THotel[]>("/api/my-hotels", {
      withCredentials: true,
    })
    .then((response) => response.data);

export { createMyHotel, getMyHotels };
