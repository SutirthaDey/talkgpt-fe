import React from "react";
import { useNavigate } from "react-router-dom";

const ToAuth = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[450px] w-[550px] bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-red-400 rounded-xl flex flex-col justify-center items-center z-20">
      <img
        src="/assests/selection.png"
        alt="jelly"
        className="mx-auto mt-8"
      ></img>
      <h1 className="text-[32px]  font-archivo  text-[#171A1FFF] font-semibold tracking-[0.020em] mt-1">
        Unleash Nova.ai Conversations
      </h1>
      <p className="font-inter text-[16px] font-[400px] text-[#9095A0FF] mt-2 leading-6">
        To Continue, kindly log in with your account
      </p>
      <div className="h-30 w-full flex flex-col px-36 justify-center gap-3 mt-10">
        <button
          onClick={() => navigate("/signup")}
          className="h-[52px] w-30 bg-[#171A1FFF] text-white rounded-md font-[400px] font-inter leading-7 text-lg hover:bg-[#272c35]"
        >
          Sign up
        </button>
        <button
          onClick={() => navigate("/login")}
          className="h-[52px] w-30 mx-10  text-[#171A1FFF] font-[400px] font-inter leading-7 text-lg hover:bg-[#ececec]"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default ToAuth;
