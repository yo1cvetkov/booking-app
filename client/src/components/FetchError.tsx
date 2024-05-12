import { TriangleAlertIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useQueryClient } from "@tanstack/react-query";

export const FetchError = ({ refetchKey }: { refetchKey: string[] }) => {
  const queryClient = useQueryClient();

  function handleRetry() {
    queryClient.refetchQueries({ queryKey: refetchKey });
  }

  return (
    <div className="flex flex-col items-center justify-center h-[400px] gap-6">
      <div className="p-6 bg-red-100 rounded-full">
        <TriangleAlertIcon className="w-12 h-12 text-red-500" />
      </div>
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Oops, something went wrong!</h2>
        <p className="text-gray-500">There was an error fetching the data. Please try again later.</p>
      </div>
      <Button onClick={handleRetry} className="text-white bg-red-500 hover:text-white hover:bg-red-600" variant={"outline"}>
        Retry
      </Button>
    </div>
  );
};
