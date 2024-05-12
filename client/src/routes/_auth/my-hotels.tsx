import { FetchError } from "@/components/FetchError";
import { MyHotelCard } from "@/components/MyHotelCard";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMyHotels } from "@/services/my-hotels/useMyHotels";
import { Link, createFileRoute } from "@tanstack/react-router";
import { PlusIcon } from "lucide-react";

const MyHotels = () => {
  const { myHotels, isLoadingMyHotels, isMyHotelsError } = useMyHotels();

  return (
    <section className="container px-4 py-5">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold tracking-tight">My hotels</h1>
        <Link to="/my-hotels/add" className={cn(buttonVariants({ variant: "default" }), "flex gap-x-2")}>
          Add a hotel
          <PlusIcon className="w-4 h-4" />
        </Link>
      </div>
      {isMyHotelsError && <FetchError refetchKey={["my-hotels"]} />}
      <div className="grid grid-cols-4 pt-5 gap-x-5 gap-y-5">
        {isLoadingMyHotels
          ? Array.from({ length: 6 }).map((_, index) => <MyHotelCard.Skeleton key={index} />)
          : myHotels?.map((hotel) => <MyHotelCard key={hotel.name} hotel={hotel} />)}
      </div>
    </section>
  );
};

export const Route = createFileRoute("/_auth/my-hotels")({
  component: MyHotels,
});
