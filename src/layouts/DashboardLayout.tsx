import React from "react";
import { DashboardNavbarWrapper } from "@/components/dashboard-navbar/dashboard-navbar";
import { SidebarWrapper } from "@/components/sidebar/sidebar";
import { SidebarContext } from "@/ctx/layout-context";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      <section className="flex">
        <SidebarWrapper />
        <DashboardNavbarWrapper>{children}</DashboardNavbarWrapper>
      </section>
    </SidebarContext.Provider>
  );
};

export default DashboardLayout;
