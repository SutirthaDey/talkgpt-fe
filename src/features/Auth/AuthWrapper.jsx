import React, { useEffect } from "react";
import SocialAuth from "./SocialAuth";
import ManualAuth from "./ManualAuth";
import { useApiRequest } from "../../hooks/useApiRequest";

const AuthWrapper = ({ type }) => {
  const apiRequest = useApiRequest();

  useEffect(() => {
    async function healthCheck() {
      await apiRequest("health");
    }

    healthCheck();
  }, [apiRequest]);

  return (
    <div className="h-[500px] w-[550px] bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-red-400 rounded-xl flex flex-col z-20 text-center">
      <h1 className="text-3xl leading-10 font-Archivo  text-[#171A1FFF] font-bold mt-10">
        {type === "signup" ? "Create Your Account" : "Sign In to Your Account"}
      </h1>
      <SocialAuth />
      <div className="mx-auto flex justify-center">
        <img
          src="/assests/svg/DividerLine.svg"
          alt="ruler"
          className="w-[350px]"
        />
      </div>
      <ManualAuth type={type} />
    </div>
  );
};

export default AuthWrapper;
