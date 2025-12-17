import DropFileArea from "@/components/DropFileArea";
import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

const Dashboard: React.FC = () => {


  return (
    <DashboardLayout>
      <div className="w-full flex flex-col items-center">
        <DropFileArea />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
