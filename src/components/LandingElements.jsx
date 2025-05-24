import React from "react";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { RxQuestionMark } from "react-icons/rx";
import { FaCode } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { PiLightbulb } from "react-icons/pi";

const LandingElements = () => {
  return (
    <>
      <img
        src="/assests/wave.png"
        alt="wave"
        className="absolute top-[599px] left-[1300px]"
      ></img>
      <img
        src="/assests/cross.png"
        alt="cross"
        className="absolute top-[226px] left-[1365px]"
      ></img>
      <div className="absolute top-[610px] left-[1540px] h-[60px] w-[88px] bg-[#E8618CFF] rounded-[4px] flex justify-center items-center p-2">
        <PiPaintBrushDuotone className="h-[32px] w-[32px] text-white" />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="20"
        fill="currentColor"
        className="bi bi-triangle absolute top-[675px] left-[1510px]"
        stroke="#636AE8FF"
        strokeWidth="1.5"
        viewBox="0 0 16 16"
      >
        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
      </svg>
      <div className="absolute top-[415px] left-[1340px] h-[52px] w-[50px] bg-[#636AE8FF] rounded-full flex justify-center items-center z-20 hover:bg-[#494fbd]">
        <IoMdHeartEmpty className="text-white h-[30px] w-[30px]" />
      </div>
      <div className="absolute top-[255px] left-[1310px] h-[60px] w-[60px] bg-[#CED0F8FF] rounded-md flex justify-center items-center z-20">
        <RxQuestionMark className="h-[36px] w-[36px] text-[#636AE8FF]" />
      </div>
      <div className="absolute top-[381px] left-[1375px] h-[202px] w-[257px] bg-[#E0E1FAFF] rounded-md z-0 flex flex-col justify-evenly pl-6 py-2">
        <p className="font-inter text-sm font-[400px] text-[#171A1FFF]">
          Create a cool cat wallpaper
        </p>
        <img
          src="/assests/cat.jpg"
          alt="cat"
          className="h-[120px] w-[209px] rounded-sm"
        />
      </div>
      <div className="absolute top-[295px] left-[1350px] w-[282px] h-[71px] bg-[#E0E1FAFF] rounded-2xl rounded-br-none shadow-soft-purple z-10">
        <div className="h-[36px] w-[36px] bg-[#F8CEDBFF] rounded-full flex justify-center absolute  top-4 right-5">
          <img
            src="/assests/E1.jpg"
            alt="avatar1"
            className="h-[36px] w-[36px]"
          />
        </div>
        <div className="absolute top-[18px] left-[23px] w-[190px] h-[11px] bg-[#878CEDFF] rounded-md"></div>
        <div className="absolute top-[44px] left-[23px] w-[160px] h-[11px] bg-[#878CEDFF] rounded-md"></div>
      </div>
      <div
        className="absolute top-[190px] left-[1070px] w-[300px] h-[280px] bg-red-100 bg rounded-full"
        style={{
          background: "linear-gradient(180deg, transparent 50%, #878CEDFF 50%)",
        }}
      ></div>
      <img
        src="./assests/round_arrow.png"
        alt="round-arrow"
        className="absolute top-[520px] left-[501px]"
      ></img>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 16 16"
        fill="none"
        stroke="#E8618CFF"
        strokeWidth="2"
        className="absolute top-[617px] left-[480px]"
      >
        <circle cx="8" cy="8" r="7" />
      </svg>

      <FaCode className="absolute top-[239px] left-[420px] h-[36px] w-[36px] text-[#878CEDFF]" />
      <div className="absolute top-[537px] left-[380px] h-[88px] w-[88px] bg-[#636AE8FF] opacity-1 rounded-[10px]">
        <img src="/assests/J1.jpg" alt="boy-avatar" />
      </div>

      <div className="absolute top-[537px] left-[310px] h-[55px] w-[55px] bg-[#FDF1F5FF] flex justify-center items-center hover:bg-[#f7e3e9]">
        <AiOutlineLike className="h-[40px] w-[40px] text-[#E8618CFF]" />
      </div>
      <div className="absolute top-[472px] left-[260px] h-[34px] w-[34px] bg-[#CED0F8FF] flex justify-center items-center rounded-full">
        <img
          src="/assests/I1.jpg"
          alt="lady-avatar"
          className="h-[28px] w-[28px]"
        ></img>
      </div>

      <div className="absolute top-[473px] left-[300px] h-[44px] w-[295px] bg-[#E0E1FAFF] rounded-2xl rounded-tl-none flex justify-center items-center">
        <p className="font-inter text-sm font-[400px] text-[#171A1FFF]">
          How do birds navigate during migration?
        </p>
      </div>

      <div className="absolute top-[350px] left-[250px] h-[34px] w-[34px] bg-[#CED0F8FF] flex justify-center items-center rounded-full">
        <img
          src="/assests/A1.jpg"
          alt="lady-avatar"
          className="h-[28px] w-[28px]"
        ></img>
      </div>

      <div className="absolute top-[351px] left-[290px] h-[68px] w-[196px] bg-[#E0E1FAFF] rounded-2xl rounded-tl-none flex justify-start items-center overflow-hidden">
        <p className="font-inter text-sm font-[400px] text-[#171A1FFF] leading-[22px] mt-5 ml-4">
          Hi !!
          <br /> Just ask you one <br /> question
        </p>
      </div>

      <div className="absolute top-[305px] left-[458px] w-[60px] h-[60px] bg-[#F8CEDBFF] rounded-md flex justify-center items-center">
        <PiLightbulb className="h-[32px] w-[32px] text-[#E8618CFF]" />
      </div>
    </>
  );
};

export default LandingElements;
