import React from "react";
import PasswordInput from "@/components/PasswordInput";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { validateEmail } from "@/utils/validateEmail";
import { api, END_POINTS } from "@/services/api";
import { ThemeSwitch } from "@/components/theme-switch";

const SignIn: React.FC = () => {
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      };
      const response = await api.post(END_POINTS.AUTH.SIGN_IN, data);
      console.log("Sign-in successful:", response.data);
    } catch (error) {
      console.error("Error processing sign-in:", error);
    }
  };

  return (
    <section className="min-h-screen overflow-hidden w-full grid  md:grid-cols-5 items-center">
      <ThemeSwitch className="absolute right-8 top-8" />

      <div className="hidden md:flex md:col-span-3 max-h-screen w-full h-full justify-center items-center  bg-primary/30 ">
        <DotLottieReact
          src="/animations/sign-in.json"
          loop
          autoplay
          width="80%"
          height="80%"
          className="min-w-[400px]"
        />
      </div>
      <div className="flex h-full justify-center items-center md:col-span-2 ">
        <Form
          className=" flex flex-col justify-center items-center w-[90%] md:w-[50%]"
          onSubmit={handleSignIn}
        >
          <h1 className=" text-3xl font-bold ">Sign In</h1>
          <Input
            isRequired
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
            className="my-4"
            validate={validateEmail}
          />

          <PasswordInput />

          <Link href="/auth/forgot-password" className="self-end" size="sm">
            Forgot Password?
          </Link>

          <Button color="primary" type="submit" className="w-full">
            Sign In
          </Button>
          <div className="mt-4 text-center text-sm ">
            Don't have an account?{" "}
            <Link href="/auth/sign-up" color="primary">
              Sign Up
            </Link>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default SignIn;
