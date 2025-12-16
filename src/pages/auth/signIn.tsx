import DefaultLayout from "@/layouts/default";
import React from "react";

const SignIn: React.FC = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="mt-8">
          <h1 className="text-3xl font-bold">Sign In</h1>
          
        </div>
      </section>
    </DefaultLayout>
  );
};

export default SignIn;
