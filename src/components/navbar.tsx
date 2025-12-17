import React from "react";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/stores/useAuthStore";

const AuthButtons = () => {
  const navigate = useNavigate();
  const authState = useAuthStore((state) => state);

  return (
    <>
      {!authState?.isAuthenticated ? (
        <>
          <Button onPress={() => navigate(siteConfig.routerPaths.auth.signIn)}>
            Sign In
          </Button>
          <Button
            color="primary"
            onPress={() => navigate(siteConfig.routerPaths.auth.signUp)}
          >
            Sign Up
          </Button>
        </>
      ) : (
        <>
          <Button onPress={() => navigate(siteConfig.routerPaths.dashboard.index)}>
            Dashboard
          </Button>
        </>
      )}
    </>
  );
};

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit uppercase">
              {siteConfig.name}
            </p>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <AuthButtons />
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" href="#" size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="space-x-2">
            <AuthButtons />
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
