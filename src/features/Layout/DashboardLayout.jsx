import React from "react";
import Sidebar from "./Sidebar";
// import Header from "./Header";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-[98vh] w-screen p-3 flex gap-2 overflow-hidden">
      <Sidebar />
      <div className="w-full h-screen flex flex-col items-center">
        {/* <Header /> */}
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
