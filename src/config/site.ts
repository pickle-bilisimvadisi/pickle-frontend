export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Pickle",
  description: "Pickle - Description",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
  ],
  routerPaths: {
    home: "/",
    auth: {
      signIn: "/auth/sign-in",
      signUp: "/auth/sign-up",
      forgotPassword: "/auth/forgot-password",
    },
  },
};
