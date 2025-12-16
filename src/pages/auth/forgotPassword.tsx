import AuthLayout from "@/layouts/AuthLayout";
import { validateEmail } from "@/utils/validateEmail";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import React, { useState } from "react";
import { Form } from "@heroui/form";
import { Link } from "@heroui/link";
import { InputOtp } from "@heroui/input-otp";

const otpLength = 6;

const ForgotPassword: React.FC = () => {
  const [progress, setProgress] = useState<1 | 2 | 3>(1);
  const handleForgotPassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
  };

  const handleNextStep = () => {
    setProgress((prev) => (prev < 3 ? ((prev + 1) as 2 | 3) : prev));
  };

  return (
    <AuthLayout>
      {progress === 1 && <FirstProgressStep nextStep={handleNextStep} />}
      {progress === 2 && <SecondProgressStep nextStep={handleNextStep} />}
      {progress === 3 && <ThirdProgressStep />}
    </AuthLayout>
  );
};

const FirstProgressStep: React.FC<{
  nextStep: () => void;
}> = ({ nextStep }) => {
  const handleForgotPassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    try {
      console.log("Password reset link sent to:", email);
      nextStep();
    } catch (error) {
      console.error("Error sending password reset email:", error);
    }
  };

  return (
    <Form
      className=" flex flex-col justify-center items-center w-[90%] md:w-[50%]"
      onSubmit={handleForgotPassword}
    >
      <h1 className=" text-3xl font-bold ">Forgot Password</h1>
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

      <Button color="primary" type="submit" className="w-full">
        Send Reset Link
      </Button>
      <div className="mt-4 text-center text-sm ">
        Remember your password?{" "}
        <Link href="/auth/sign-up" color="primary">
          Sign In
        </Link>
      </div>
    </Form>
  );
};

const SecondProgressStep: React.FC<{
  nextStep: () => void;
}> = ({ nextStep }) => {
  const [value, setValue] = React.useState("");

  const handleVerifyOtp = (value: string) => {
    setValue(value);
    try {
      if (value.length === otpLength) {
        nextStep();
      }
    } catch (error) {}
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className=" text-2xl font-bold ">Enter the OTP sent to your email</h1>
      <p className=" text-sm text-gray-600 ">
        Please enter the 6-digit code we sent to your email address.
      </p>
      <InputOtp
        length={otpLength}
        value={value}
        onValueChange={handleVerifyOtp}
      />
    </div>
  );
};

const ThirdProgressStep: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className=" text-2xl font-bold ">OTP Verified!</h1>
      <p className=" text-sm text-gray-600 ">
        You can now proceed to reset your password.
      </p>
    </div>
  );
};

export default ForgotPassword;
