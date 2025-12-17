import { Navbar, NavbarContent } from "@heroui/navbar";
import React from "react";
import { FeedbackIcon } from "../icons/navbar/feedback-icon";
import { GithubIcon } from "../icons/navbar/github-icon";
import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";
import { ThemeSwitch } from "../theme-switch";


interface Props {
  children: React.ReactNode;
}

export const DashboardNavbarWrapper = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>
        <div className="hidden md:block"></div>
        <NavbarContent
          justify="end"
          className="w-fit data-[justify=end]:flex-grow-0 float-right"
        >
          <div className="flex items-center gap-2 max-md:hidden">
            <FeedbackIcon />
            <span>Feedback?</span>
          </div>

          <NotificationsDropdown />

          <a href="https://github.com/" target={"_blank"}>
            <GithubIcon />
          </a>
          <NavbarContent>
            <ThemeSwitch />
          </NavbarContent>
          <NavbarContent>
            <UserDropdown />
          </NavbarContent>
        </NavbarContent>
      </Navbar>
      <main>{children}</main>
    </div>
  );
};
