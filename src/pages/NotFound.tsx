import React from "react";
import { ThemeSwitch } from "@/components/theme-switch";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <ThemeSwitch className="hidden" />
      <DotLottieReact
        src="/animations/NotFound.json"
        autoplay
        loop
        className="w-64 h-64 md:w-96 md:h-96 mx-auto mb-4"
      />
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-md mt-3">
        The page you are looking for does not exist.
      </p>
      <Button color="primary" className="mt-6" onPress={() => navigate("/")}>
        Go to Home
      </Button>
    </div>
  );
};

export default NotFound;
