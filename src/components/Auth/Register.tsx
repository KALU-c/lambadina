import { Link, useNavigate } from "react-router";
import Footer from "../Footer";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import AuthNavbar from "./AuthNavbar";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import axios from "axios";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schema/registerSchema";
import * as z from "zod";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      password2: "",
      user_type: "client",
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    setIsLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/users/register/`, values);
      toast.success("Account created successfully 🎉");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
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
              <p className="text-center text-2xl">Create Account</p>
              <span className="text-muted-foreground text-lg">
                Join the Ethiopian Top Freelance Platform
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
                        <Input {...field} className="h-10 rounded-sm focus-visible:ring-[#FFB000] focus-visible:border-[#FFB000]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-light">Email</FormLabel>
                      <FormControl>
                        <Input {...field} className="h-10 rounded-sm focus-visible:ring-[#FFB000] focus-visible:border-[#FFB000]" />
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
                        <Input type="password" {...field} className="h-10 rounded-sm focus-visible:ring-[#FFB000] focus-visible:border-[#FFB000]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-light">Confirm Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} className="h-10 rounded-sm focus-visible:ring-[#FFB000] focus-visible:border-[#FFB000]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="user_type"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col gap-2 py-2">
                        <span className="text-lg">I want to join as:</span>
                        <RadioGroup
                          defaultValue="client"
                          onValueChange={field.onChange}
                          className="flex flex-row gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem className="h-5 w-5 [&_svg]:h-3 [&_svg]:w-3" id="client" value="client" />
                            <Label htmlFor="client" className="text-md font-light">Client</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem className="h-5 w-5 [&_svg]:h-3 [&_svg]:w-3" id="mentor" value="mentor" />
                            <Label htmlFor="mentor" className="text-md font-light">Mentor</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>

              <CardFooter className="flex flex-col gap-1">
                <Button
                  size={"lg"}
                  className="w-full text-lg py-6"
                  type="submit"
                  disabled={isLoading}
                >
                  <Loader className={isLoading ? "block animate-spin mr-2" : "hidden"} />
                  Create Account
                </Button>
                <p className="text-muted-foreground">
                  Already have an account?{" "}
                  <Link to={"/login"}>
                    <span className="underline underline-offset-1 text-[#FFB000]">Sign In</span>
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

export default Register;
