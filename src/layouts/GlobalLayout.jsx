import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
// import Header from "./Header";

const GlobalLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-[98vh] w-screen p-3 flex gap-2 overflow-hidden">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="w-full h-full flex flex-col items-center">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default GlobalLayout;
