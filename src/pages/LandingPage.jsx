import React from "react";
import AuthWrapper from "../features/Auth/AuthWrapper";
import LandingElements from "../components/LandingElements";

const LandingPage = () => {
  return (
    <div className="h-screen w-screen bg-[#FAFAFBFF] relative overflow-hidden">
      <AuthWrapper />
      <LandingElements />
    </div>
  );
};

export default LandingPage;
