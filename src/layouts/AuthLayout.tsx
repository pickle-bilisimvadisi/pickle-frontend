import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ThemeSwitch } from "@/components/theme-switch";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
          className="min-w-[350px]"
        />
      </div>
      <div className="flex h-full justify-center items-center md:col-span-2 ">
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
