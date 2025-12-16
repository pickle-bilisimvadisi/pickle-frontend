import React, { useState } from "react";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { validateEmail } from "@/utils/validateEmail";
import { api, END_POINTS } from "@/services/api";
import AuthLayout from "@/layouts/AuthLayout";
import PasswordInput from "@/components/PasswordInput";

const SignUp: React.FC = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const password = formData.get("password") as string;
      const confirmPassword = formData.get("confirmPassword") as string;

      if (password !== confirmPassword) {
        setErrors({
          confirmPassword: "Passwords do not match",
        });
        return;
      } else {
        setErrors({});
      }
      const data = {
        email: formData.get("email") as string,
        password: password,
      };
      const response = await api.post(END_POINTS.AUTH.SIGN_UP, data);
      console.log("Sign-up successful:", response.data);
    } catch (error) {
      console.error("Error processing sign-up:", error);
    }
  };

  return (
    <AuthLayout>
      <Form
        className=" flex flex-col justify-center items-center w-[90%] md:w-[50%]"
        onSubmit={handleSignUp}
        validationErrors={errors}
      >
        <h1 className=" text-3xl font-bold ">Sign Up</h1>
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

        <PasswordInput className="my-4" />

        <PasswordInput
          name="confirmPassword"
          label="Confirm Password"
          className="my-4"
        />

        <Button color="primary" type="submit" className="w-full">
          Sign Up
        </Button>
        <div className="mt-4 text-center text-sm ">
          Already have an account?{" "}
          <Link href="/auth/sign-in" color="primary">
            Sign In
          </Link>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default SignUp;
