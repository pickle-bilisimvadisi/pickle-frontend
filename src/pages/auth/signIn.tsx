import React from "react";
import PasswordInput from "@/components/PasswordInput";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { validateEmail } from "@/utils/validateEmail";
import AuthLayout from "@/layouts/AuthLayout";
import { addToast } from "@heroui/toast";
import useAuthStore from "@/stores/useAuthStore";

const SignIn: React.FC = () => {
  const authState = useAuthStore((state) => state);
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      await authState.signIn(
        formData.get("email") as string,
        formData.get("password") as string
      );
      addToast({
        title: `Logged in successfully!`,
        severity: "success",
      });
    } catch (error) {
      console.error("SignIn error:", error);
    }
  };

  return (
    <AuthLayout>
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
          disabled={authState.isLoading}
        />

        <PasswordInput disabled={authState.isLoading} />

        <Link href="/auth/forgot-password" className="self-end" size="sm">
          Forgot Password?
        </Link>

        <Button
          color="primary"
          type="submit"
          className="w-full"
          isLoading={authState.isLoading}
        >
          Sign In
        </Button>
        <div className="mt-4 text-center text-sm ">
          Don't have an account?{" "}
          <Link href="/auth/sign-up" color="primary">
            Sign Up
          </Link>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default SignIn;
