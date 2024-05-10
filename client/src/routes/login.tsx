import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/use-auth";
import { TLoginSchema, loginSchema } from "@/schemas/auth";
import { userQueryOptions } from "@/services/auth/apiAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, createFileRoute, getRouteApi, redirect, useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const routeApi = getRouteApi("/login");

const Login = () => {
  const { login, isLogingIn } = useAuth();

  const navigate = useNavigate();

  const search = routeApi.useSearch();

  const form = useForm<TLoginSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  function handleSubmit(data: TLoginSchema) {
    login(
      { data },
      {
        onSuccess: () => {
          navigate({ to: search.redirect });
        },
        onSettled: () => {
          form.reset();
        },
      }
    );
  }

  return (
    <div className="flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-left text-gray-900">Log in to your account</h2>
          <p className="mt-2 text-sm text-left text-gray-600">
            Or
            <Link to="/register" search={{ redirect: "/" }} className="ml-1 font-medium text-primary hover:underline hover:underline-offset-2">
              register for a new account
            </Link>
          </p>
        </div>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} placeholder="you@example.com" disabled={form.formState.isSubmitting || isLogingIn} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} placeholder="••••••••" disabled={form.formState.isSubmitting || isLogingIn} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting || isLogingIn}>
              {isLogingIn || form.formState.isSubmitting ? <Loader2 className="self-center w-4 h-4 animate-spin" /> : "Login"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/login")({
  beforeLoad: async ({ context }) => {
    const currUser = await context.queryClient.fetchQuery(userQueryOptions);

    if (currUser) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: Login,
  validateSearch: z.object({
    redirect: z.string().catch("/"),
  }),
});
