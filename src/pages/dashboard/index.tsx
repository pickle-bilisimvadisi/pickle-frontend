import DropFileArea from "@/components/DropFileArea";
import DashboardLayout from "@/layouts/DashboardLayout";
import useAuthStore from "@/stores/useAuthStore";
import React from "react";
import { Navigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const authState = useAuthStore((state) => state);
  if (!authState.isAuthenticated === false) {
    return <Navigate to="/404" replace />;
  }

  return (
    <DashboardLayout>
      <div className="w-full flex flex-col items-center">
        <DropFileArea />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
