"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema, LoginType } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { signIn, SignInResponse } from "next-auth/react";

export default function Login() {
  // password Eye State
  const [isPassword, setIsPassword] = useState(true);

  const myForm = useForm<LoginType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
    mode: "all",
  });
  // Handle Submit Function
  async function handleLogin(values: LoginType) {
    const response: SignInResponse | undefined = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/",
    });

    if (response?.ok) {
      toast.success("logged in successfully");
      window.location.href = "/";
    } else {
      toast.error(response?.error as string);
    }
  }
  return (
    <>
      <main>
        <div className="container mx-auto">
          <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto   bg-fuchsia-50  shadow rounded-xl my-5 pb-5 pt-1">
            <h2 className="text-center text-gray-500 font-bold text-3xl my-7">
              Login Now
            </h2>

            <div>
              <Form {...myForm}>
                <form
                  onSubmit={myForm.handleSubmit(handleLogin)}
                  className="m-5 space-y-6"
                >
                  {/* email */}
                  <FormField
                    control={myForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-500 text-lg">
                          Email:
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* password */}
                  <FormField
                    control={myForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-500 text-lg">
                          Password:
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              {...field}
                              type={isPassword ? "password" : "text"}
                            />
                            {isPassword ? (
                              <Eye
                                onClick={() => setIsPassword(false)}
                                className="absolute top-2 right-2 text-gray-500"
                              />
                            ) : (
                              <EyeOff
                                onClick={() => setIsPassword(true)}
                                className="absolute top-2 right-2 text-gray-500"
                              />
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Button */}
                  <div>
                    <Button className="bg-fuchsia-300 hover:bg-fuchsia-400 hover:text-gray-100 text-gray-500 w-full font-semibold text-xl">
                      Login
                    </Button>
                  </div>
                  <div className="flex   justify-between items-center ">
                    <Link
                      className="text-fuchsia-500 underline"
                      href={"/forget-password"}
                    >
                      forget password
                    </Link>
                    <h3 className="text-gray-500">
                      Dont have an account?
                      <Link
                        className="text-fuchsia-500 underline"
                        href={"/register"}
                      >
                        Register Now
                      </Link>
                    </h3>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
