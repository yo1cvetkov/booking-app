import { useMutation } from "@tanstack/react-query";
import { register } from "./apiAuth";
import { toast } from "sonner";
import { AxiosError } from "axios";

const useRegister = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      toast.success("You have registered successfully.");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        switch (error.response?.status) {
          case 400:
            toast.error("User already exists.");
            break;
          case 500:
            toast.error("Something went wrong");
            break;
          default:
            toast.error("Failed to register");
        }
      }
    },
  });

  return { mutate, isPending };
};

export { useRegister };
