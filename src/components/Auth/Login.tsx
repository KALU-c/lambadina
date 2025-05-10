import { Link } from "react-router";
import Footer from "../Footer";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import AuthNavbar from "./AuthNavbar";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { loginSchema } from "@/schema/loginSchema";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Loader } from "lucide-react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/users/login/`, values);
      toast.success("Login successful 🎉");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Invalid credentials or something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <main className="px-[22px] pt-[10px] flex flex-col space-y-6 mb-14">
        <AuthNavbar />

        <Card>
          <CardHeader className="flex flex-col gap-8 items-center justify-center">
            <img src="/logo.png" alt="lambadina logo" className="h-8 text-center" />

            <div className="flex flex-col">
              <p className="text-center text-2xl">Welcome Back</p>
              <span className="text-muted-foreground text-lg">
                Sign in to continue to Lambadina
              </span>
            </div>
          </CardHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="py-2 flex flex-col space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-light">Username</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="h-10 rounded-sm focus-visible:ring-[#FFB000] focus-visible:border-[#FFB000]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-light">Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          {...field}
                          className="h-10 rounded-sm focus-visible:ring-[#FFB000] focus-visible:border-[#FFB000]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>

              <CardFooter className="flex flex-col gap-1 pt-10">
                <Button
                  size="lg"
                  className="w-full text-lg py-6"
                  type="submit"
                  disabled={isLoading}
                >
                  <Loader className={isLoading ? "block animate-spin mr-2" : "hidden"} />
                  Sign In
                </Button>
                <p className="text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to={"/register"}>
                    <span className="underline underline-offset-1 text-[#FFB000]">Register</span>
                  </Link>
                </p>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default Login;
