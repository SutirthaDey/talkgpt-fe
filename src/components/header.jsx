import React from "react";
import { HiMenu } from "react-icons/hi"; // optional: for a menu icon

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const onMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="sm:hidden fixed top-0 left-0 w-full h-14 bg-[#fefefe] flex items-center justify-start gap-4 px-4 shadow z-50">
      <HiMenu
        className="h-6 w-6 text-[#171A1FFF] cursor-pointer"
        onClick={onMenuClick}
      />
    </div>
  );
};

export default Header;
