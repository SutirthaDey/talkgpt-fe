// import React from "react";
// import { FaFacebook } from "react-icons/fa6";
// import { PiAppleLogoBold } from "react-icons/pi";
// import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleAuth } from "./GoogleAuth";

const SocialAuth = ({ loader, setLoader }) => {
  return (
    <div>
      <div className="w-full flex justify-center items-center mt-4 sm:mt-5 h-auto sm:h-20 gap-2 sm:gap-3 px-4">
        <GoogleAuth loader={loader} setLoader={setLoader} />
      </div>
    </div>
  );
};

export default SocialAuth;
