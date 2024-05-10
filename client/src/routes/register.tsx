import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createFileRoute, getRouteApi, useNavigate } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TRegisterSchema, registerSchema } from "@/schemas/auth";
import { useRegister } from "@/services/auth/useRegister";
import { Loader2 } from "lucide-react";
import { z } from "zod";

const routeApi = getRouteApi("/register");

const Register = () => {
  const form = useForm<TRegisterSchema>({
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const { mutate: signup, isPending: isSigningUp } = useRegister();

  const navigate = useNavigate();

  const search = routeApi.useSearch();

  async function handleSubmit(data: TRegisterSchema) {
    signup(
      { data },
      {
        onSuccess: () => {
          navigate({ to: search.redirect });
        },
      }
    );
  }

  return (
    <section className="container px-4">
      <div className="max-w-md pt-20 mx-auto space-y-6">
        <div className="space-y-2 text-left">
          <h1 className="text-3xl font-bold">Register now</h1>
          <p className="text-gray-500 dark:text-gray-400">Create your account to get started.</p>
        </div>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your first name" disabled={form.formState.isSubmitting || isSigningUp} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your first name" disabled={form.formState.isSubmitting || isSigningUp} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" placeholder="Enter your email" disabled={form.formState.isSubmitting || isSigningUp} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" disabled={form.formState.isSubmitting || isSigningUp} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" disabled={form.formState.isSubmitting || isSigningUp} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit" disabled={form.formState.isSubmitting || isSigningUp}>
              {form.formState.isSubmitting || isSigningUp ? <Loader2 className="self-center w-4 h-4 animate-spin" /> : "Register"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export const Route = createFileRoute("/register")({
  component: Register,
  validateSearch: z.object({
    redirect: z.string().catch("/"),
  }),
});
