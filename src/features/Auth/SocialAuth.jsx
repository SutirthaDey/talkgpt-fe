import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { PiAppleLogoBold } from "react-icons/pi";

const SocialAuth = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center mt-5 h-20 gap-3">
        <button className="h-12 w-12 flex justify-center items-center rounded-full bg-[#C71610FF] hover:bg-[#8A0F0BFF]">
          <FaGoogle className="text-white size-5" />
        </button>
        <button className="h-12 w-12 flex justify-center items-center rounded-full bg-[#335CA6FF] hover:bg-[#233F72FF]">
          <FaFacebook className="text-white size-5" />
        </button>
        <button className="h-12 w-12 flex justify-center items-center rounded-full bg-[#000000] hover:bg-[#353535]">
          <PiAppleLogoBold className="text-white size-5" />
        </button>
      </div>
    </div>
  );
};

export default SocialAuth;
