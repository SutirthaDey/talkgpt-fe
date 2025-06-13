import React, { useEffect, useState } from "react";
import SocialAuth from "./SocialAuth";
import ManualAuth from "./ManualAuth";
import { useApiRequest } from "../../hooks/useApiRequest";
import GlobalWheel from "../../components/GlobalWheel";

const AuthWrapper = ({ type }) => {
  const apiRequest = useApiRequest();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function healthCheck() {
      await apiRequest("health");
    }

    healthCheck();
  }, [apiRequest]);

  return (
    <>
      {loader && <GlobalWheel text="Redirecting..." />}
      <div className="w-[90%] sm:w-[500px] md:w-[550px] bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-red-400 rounded-xl flex flex-col z-20 text-center py-6 px-4 sm:px-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl leading-snug font-Archivo text-[#171A1FFF] font-bold mt-2 sm:mt-4 md:mt-8">
          {type === "signup"
            ? "Create Your Account"
            : "Sign In to Your Account"}
        </h1>

        <SocialAuth loader={loader} setLoader={setLoader} />

        <div className="mx-auto flex justify-center sm:mb-3">
          <img
            src="/assests/svg/DividerLine.svg"
            alt="ruler"
            className="w-[95%]"
          />
        </div>

        <ManualAuth type={type} loader={loader} setLoader={setLoader} />
      </div>
    </>
  );
};

export default AuthWrapper;
