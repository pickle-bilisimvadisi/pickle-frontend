import AuthLayout from "@/layouts/AuthLayout";
import { validateEmail } from "@/utils/validateEmail";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import React, { useState } from "react";
import { Form } from "@heroui/form";
import { Link } from "@heroui/link";
import { InputOtp } from "@heroui/input-otp";
import { AUTH_SERVICE } from "@/services/authService";
import { addToast } from "@heroui/toast";

const otpLength = 6;

const ForgotPassword: React.FC = () => {
  const [progress, setProgress] = useState<1 | 2 | 3>(1);

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
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    try {
      await AUTH_SERVICE.forgotPassword(email);
      nextStep();
    } catch (error) {
      console.error("Error sending forgot password request:", error);
    } finally {
      setIsLoading(false);
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
        disabled={isLoading}
      />

      <Button
        color="primary"
        type="submit"
        className="w-full"
        isLoading={isLoading}
      >
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

export const SecondProgressStep: React.FC<{
  nextStep: () => void;
  postOtp?: (otp: string) => Promise<void>;
}> = ({ nextStep, postOtp }) => {
  const [value, setValue] = React.useState("");

  const handleVerifyOtp = (value: string) => {
    setValue(value);
    try {
      if (value.length === otpLength) {
        nextStep();
      }
      postOtp?.(value);
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

export const ThirdProgressStep: React.FC = () => {
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
