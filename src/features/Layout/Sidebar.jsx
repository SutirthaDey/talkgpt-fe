import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="min-w-72 h-full bg-[#FDF1F5FF] rounded-2xl flex flex-col items-center px-3 gap-3">
      <div className="w-full h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/assests/selection.png" alt="logo" className="h-12 w-12" />
          <h2 className="font-archivo text-[#000000FF] text-xl font-bold">
            AnyChat
          </h2>
        </div>

        <div>
          <BiSearchAlt className="float-right h-6 w-6 text-gray-500" />
        </div>
      </div>
      <button
        className="w-full h-10 flex justify-center items-center bg-[#171A1FFF] text-white rounded-lg font-inter text-sm font-[400]
       hover:bg-[#262A33FF]"
      >
        + New chat
      </button>
      <div className="h-4/6 w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
        <div className="flex flex-col gap-3 my-5">
          <p className="font-archivo text-[12px] font-[500] text-[#171A1F66]">
            Today
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Hello world again
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Stay strong always
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Enjoy your life
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Keep moving forward
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Learn something new
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Time flies fast
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Love conquers all
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Dreams become reality
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Silence is golden
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Knowledge is power
          </p>
        </div>
        <div className="flex flex-col gap-3 my-5">
          <p className="font-archivo text-[12px] font-[500] text-[#171A1F66]">
            Previous 30 Days
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Hello world again
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Stay strong always
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Enjoy your life
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Keep moving forward
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Learn something new
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Time flies fast
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Love conquers all
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Dreams become reality
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Silence is golden
          </p>
          <p className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338]">
            Knowledge is power
          </p>
        </div>
      </div>

      <div className="h-28 w-60 flex flex-col gap-3 bg-white rounded-md border-[#F8CEDBFF] border-solid px-3 pt-4">
        <div className="flex items-center justify-between">
          <div className="flex justify-center items-center gap-3">
            <img
              src="/assests/G1.jpg"
              alt="avatar"
              className="h-9 w-9 rounded-full bg-[#E8618CFF]"
            />
            <p className="font-inter text-sm font-bold text-[#171A1FFF]">
              Emily
            </p>
          </div>
          <BsThreeDots className="size-6 text-gray-600 hover:text-black" />
        </div>
        <button className="flex justify-center items-center font-[400] font-inter bg-[#FDF1F5FF] text-[#E8618CFF] py-2 text-xs rounded-md hover:bg-[#FBE0E8FF] hover:text-[#E8618CFF]">
          Upgrade to Pro
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
