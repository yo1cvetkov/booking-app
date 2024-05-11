import { useMutation } from "@tanstack/react-query";
import { createMyHotel } from "./apiMyHotels";
import { toast } from "sonner";

const useCreateMyHotel = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: createMyHotel,
    onSuccess: () => {
      toast.success("Created my hotel.");
    },
    onError: () => {
      toast.error("Failed to create my hotel.");
    },
  });

  return { mutate, isPending };
};

export { useCreateMyHotel };
