import { DiscordIcon, GithubIcon, TwitterIcon } from "@/components/icons";

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
      logout: "/auth/logout",
    },
    pricing: "/pricing",
    dashboard: {
      index: "/dashboard",
    },
  },
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com",
      Icon: GithubIcon,
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
      Icon: TwitterIcon
    },
    {
      label: "Discord",
      href: "https://discord.com",
      Icon: DiscordIcon
    },
  ],
};
