import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMyHotel } from "./apiMyHotels";
import { toast } from "sonner";

const useCreateMyHotel = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createMyHotel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-hotels"] });
      toast.success("Created my hotel.");
    },
    onError: () => {
      toast.error("Failed to create my hotel.");
    },
  });

  return { mutate, isPending };
};

export { useCreateMyHotel };
