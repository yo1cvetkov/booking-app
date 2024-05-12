import { useQuery } from "@tanstack/react-query";
import { getMyHotels } from "./apiMyHotels";

const useMyHotels = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["my-hotels"],
    queryFn: getMyHotels,
    staleTime: 1000 * 60 * 15,
  });

  return { myHotels: data, isLoadingMyHotels: isPending, isMyHotelsError: isError };
};

export { useMyHotels };
