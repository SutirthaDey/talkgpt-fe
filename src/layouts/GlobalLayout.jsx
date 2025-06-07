import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
// import Header from "./Header";

const GlobalLayout = ({ children }) => {
  return (
    <div className="h-[98vh] w-screen p-3 flex gap-2 overflow-hidden">
      <Sidebar />
      <div className="w-full h-full flex flex-col items-center">
        {/* <Header /> */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default GlobalLayout;
