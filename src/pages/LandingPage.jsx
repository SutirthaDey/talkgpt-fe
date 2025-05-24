import React from "react";
import LandingElements from "../components/LandingElements";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-screen w-screen bg-[#FAFAFBFF] relative overflow-hidden">
      <Outlet />
      <LandingElements />
    </div>
  );
};

export default LandingPage;
