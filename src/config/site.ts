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
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    twitter: "https://twitter.com/",
    discord: "https://discord.gg/",
  },
};
