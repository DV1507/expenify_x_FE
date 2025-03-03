"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signupSchema } from "@/modules/auth/validation-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Checkbox } from "../../components/ui/checkbox";
import Link from "next/link";
import { EyeOff, LucideEye } from "lucide-react";

export function SignUpForm() {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  function onSubmit(values: z.infer<typeof signupSchema>) {
    console.log(values);
  }

  const [showPassword, setShowPassword] = useState<{
    password: boolean;
    confirmPassword: boolean;
  }>({
    password: false,
    confirmPassword: false,
  });
  return (
    <Form {...form}>
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Create an account</CardTitle>
            <CardDescription>
              Lets get started. Fill in the details below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem className="w-full pb-4">
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <FormControl>
                          <Input
                            id="username"
                            type="text"
                            autoCorrect="off"
                            placeholder="Choose a username"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full pb-4">
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            type="text"
                            autoCorrect="off"
                            placeholder="name@example.com"
                            {...field}
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
                      <FormItem className="w-full pb-4">
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <FormControl>
                          <section className="relative flex items-center gap-2">
                            <Input
                              id="password"
                              type={showPassword.password ? "text" : "password"}
                              placeholder="Must be at least 6 characters long"
                              {...field}
                            />
                            {showPassword.password ? (
                              <LucideEye
                                className="cursor-pointer absolute right-3"
                                size={20}
                                onClick={() =>
                                  setShowPassword((prev) => ({
                                    ...prev,
                                    password: !prev.password,
                                  }))
                                }
                              />
                            ) : (
                              <EyeOff
                                className="cursor-pointer absolute right-3"
                                size={20}
                                onClick={() =>
                                  setShowPassword((prev) => ({
                                    ...prev,
                                    password: !prev.password,
                                  }))
                                }
                              />
                            )}
                          </section>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem className="w-full pb-4">
                        <FormLabel htmlFor="confirmPassword">
                          Confirm Password
                        </FormLabel>
                        <FormControl>
                          <section className="relative flex items-center gap-2 ">
                            <Input
                              id="confirmPassword"
                              type={
                                showPassword.confirmPassword
                                  ? "text"
                                  : "password"
                              }
                              placeholder="Enter the same password again"
                              {...field}
                            />
                            {showPassword.confirmPassword ? (
                              <LucideEye
                                className="cursor-pointer absolute right-3"
                                size={20}
                                onClick={() =>
                                  setShowPassword((prev) => ({
                                    ...prev,
                                    confirmPassword: !prev.confirmPassword,
                                  }))
                                }
                              />
                            ) : (
                              <EyeOff
                                className="cursor-pointer absolute right-3"
                                size={20}
                                onClick={() =>
                                  setShowPassword((prev) => ({
                                    ...prev,
                                    confirmPassword: !prev.confirmPassword,
                                  }))
                                }
                              />
                            )}
                          </section>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-center gap-2 my-2">
                  <FormField
                    control={form.control}
                    name="privacyAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            <span className="text-sm text-muted-foreground">
                              I accept the{" "}
                              <a
                                href="#"
                                className="underline underline-offset-4 hover:text-primary"
                              >
                                Terms and Conditions
                              </a>
                            </span>
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" className="mt-4 w-full">
                  Sign Up
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/" className="underline underline-offset-4">
            Sign In
          </Link>
        </div>
      </div>
    </Form>
  );
}
