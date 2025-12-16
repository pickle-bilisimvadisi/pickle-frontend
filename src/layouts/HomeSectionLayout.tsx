import React from "react";

const HomeSectionLayout: React.FC<
  React.PropsWithChildren<HomeSectionLayoutProps>
> = ({ children, title, subtitle, description, isHero }) => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="text-center space-y-4">
        {title && (
          <h5
            className={
              isHero
                ? "text-sm md:text-lg text-primary/70"
                : "text-sm md:text-md text-primary/70"
            }
          >
            {subtitle}
          </h5>
        )}
        {title && (
          <h2
            className={
              isHero
                ? "text-4xl md:text-6xl font-bold"
                : "text-2xl md:text-4xl font-semibold"
            }
          >
            {title}
          </h2>
        )}
        {description && (
          <p className="text-md md:text-xl max-w-2xl mx-auto text-gray-600">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
};

export default HomeSectionLayout;

interface HomeSectionLayoutProps {
  title?: string;
  subtitle?: string;
  description?: string;
  isHero?: boolean;
}
