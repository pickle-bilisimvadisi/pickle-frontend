import DropFileArea from "@/components/DropFileArea";
import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-4xl font-semibold mt-8">Dashboard</h2>
        <p className="mt-2 text-gray-600 text-center max-w-2xl">
          Welcome to your dashboard! Here you can manage your files and view
          your recent activity.
        </p>
        <DropFileArea />
        <p className="mt-6 text-gray-500 text-center max-w-2xl">
          More dashboard content can be added here in the future.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
