import React from "react";
import { Sidebar } from "./sidebar.styles";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from "@/ctx/layout-context";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { siteConfig } from "@/config/site";

const dashboardRoutes = siteConfig.routerPaths.dashboard;

export const SidebarWrapper: React.FC = () => {
  const pathname = window.location.pathname;
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <div className="text-2xl font-bold">Pickle</div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Home"
              icon={<HomeIcon />}
              isActive={pathname === dashboardRoutes.index}
              href={dashboardRoutes.index}
            />
            <SidebarMenu title="File Management">
              <SidebarItem
                isActive={pathname === dashboardRoutes.files}
                title="Files"
                icon={<ReportsIcon />}
                href={dashboardRoutes.files}
              />
            </SidebarMenu>

            <SidebarMenu title="Updates">
              <SidebarItem
                isActive={pathname === "/changelog"}
                title="Changelog"
                icon={<ChangeLogIcon />}
              />
            </SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};
