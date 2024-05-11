import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";
import { createMyHotelSchema, type TCreateMyHotelSchema } from "@/schemas/my-hotels";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { hotelFacilities, hotelTypes } from "@/lib/mockData";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { PlusIcon, StarIcon, TrashIcon } from "lucide-react";

const AddHotel = () => {
  const form = useForm<TCreateMyHotelSchema>({
    defaultValues: {
      name: "",
      city: "",
      countAdults: 0,
      countChildren: 0,
      country: "",
      description: "",
      facilities: [],
      hotelType: "",
      imagesList: undefined,
      pricePerNight: 0.0,
      starRating: 1,
    },
    resolver: zodResolver(createMyHotelSchema),
  });

  function handleSubmit(data: TCreateMyHotelSchema) {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("description", data.description);
    formData.append("type", data.hotelType);
    formData.append("pricePerNight", data.pricePerNight.toString());
    formData.append("starRating", data.starRating.toString());
    formData.append("adultCount", data.countAdults.toString());
    formData.append("childCount", data.countChildren.toString());

    data.facilities.forEach((facility, index) => {
      formData.append(`facilities[${index}]`, facility);
    });

    Array.from(data.imagesList).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });
  }

  const fileRef = form.register("imagesList");

  return (
    <div className="max-w-6xl px-6 py-20 mx-auto">
      <section className="grid gap-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Add New Hotel</h1>
          <p className="text-gray-500">Fill out the form to add a new hotel.</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="grid gap-6">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Hotel Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={"Enter hotel name"} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-6">
              <FormField
                name="city"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder={"Enter city"} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="country"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder={"Enter country"} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder={"Enter hotel descitption"} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-6">
              <FormField
                name="pricePerNight"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Price per night</FormLabel>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400">$</span>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          value={field.value}
                          onChange={(event) => field.onChange(Number(event.target.value))}
                          placeholder={"Enter price per night"}
                          className="pl-8"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="starRating"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Star rating</FormLabel>
                    <Select defaultValue={String(field.value)} onValueChange={(value) => field.onChange(Number(value))}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select star rating" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <SelectItem key={index} className="flex items-center space-y-0 gap-x-2" value={String(index + 1)}>
                            {Array.from({ length: index + 1 }).map((_, index) => (
                              <StarIcon className="inline w-5 h-5 text-yellow-600" key={index} />
                            ))}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="hotelType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Hotel type</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-wrap">
                      {hotelTypes.map(({ id, value, label, Icon }) => (
                        <FormItem key={id} className="flex items-center justify-center p-4 space-y-0 border rounded-lg cursor-pointer">
                          <FormControl>
                            <RadioGroupItem value={value} id="hotel" />
                          </FormControl>
                          <FormLabel htmlFor="hotel" className="flex items-center ml-3 gap-x-2 text-zinc-500">
                            <Icon className="w-4 h-4 text-muted-foreground" />
                            {label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="facilities"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Facilities</FormLabel>
                    <FormDescription>Select facilities your hotel offers.</FormDescription>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {hotelFacilities.map(({ id, label, value, Icon }) => (
                      <FormField
                        key={id}
                        name="facilities"
                        control={form.control}
                        render={({ field }) => {
                          return (
                            <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(value)}
                                  onCheckedChange={(checked: boolean) => {
                                    return checked
                                      ? field.onChange([...field.value, value])
                                      : field.onChange(field.onChange(field.value?.filter((value) => value !== value)));
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="flex items-center gap-x-3">
                                <Icon className="w-4 h-4 text-zinc-500" />
                                {label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="countAdults"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Adults</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} onChange={(event) => field.onChange(Number(event.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="countChildren"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Children</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} onChange={(event) => field.onChange(Number(event.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="imagesList"
              render={() => (
                <FormItem className="flex items-center gap-x-10">
                  <div className="space-y-2">
                    <FormLabel>Hotel Images</FormLabel>
                    <FormControl>
                      <div className="relative group">
                        <label
                          className="flex flex-col items-center justify-center w-64 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                          htmlFor="image-upload"
                        >
                          <PlusIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                          <span className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">Add Image</span>
                        </label>
                        <Input className="hidden" {...fileRef} id="image-upload" accept="image/*" multiple type="file" />
                      </div>
                    </FormControl>
                  </div>
                  <div className="relative group">
                    <img
                      alt="Hotel Image"
                      className="object-cover w-full h-32 rounded-lg"
                      height={200}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width={300}
                    />
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity rounded-md opacity-0 bg-black/50 group-hover:opacity-100">
                      <Button className="text-white" size="icon" variant="ghost">
                        <TrashIcon className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={form.formState.isSubmitting}>
              Add Hotel
            </Button>
          </form>
        </Form>
      </section>
    </div>
  );
};

export const Route = createFileRoute("/_auth/my-hotels/add")({
  component: AddHotel,
});
