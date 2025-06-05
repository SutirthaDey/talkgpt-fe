import React from "react";
import { FaCode } from "react-icons/fa6";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { RxQuestionMark } from "react-icons/rx";
import { MdOutlineLocationOn } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

const NewChat = () => {
  const [searchParams] = useSearchParams();
  const isFresh = searchParams.get("fresh") === "true";

  if (isFresh) return <></>;

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="font-archivo text-[48px] font-[700] text-[#171A1FFF] leading-[68px] mb-10">
        Ask everything you want!
      </h1>
      <div className="h-18 w-3/4 rounded-md border-[1px] border-[#F3F4F6FF] border-solid flex items-center gap-3 hover:bg-gray-50 cursor-pointer">
        <div className="h-16 w-20 bg-[#F2F2FDFF] rounded-[4px] flex justify-center items-center">
          <RxQuestionMark className="h-[36px] w-[36px] text-[#636AE8FF]" />
        </div>
        <p className="font-inter text-[#171A1FFF] font-[400] text-lg">
          "Industrial Revolution's impact on geopolitics."
        </p>
      </div>
      <div className="h-18 w-3/4 rounded-md border-[1px] border-[#F3F4F6FF] border-solid flex items-center gap-3 hover:bg-gray-50 cursor-pointer">
        <div className="h-16 w-20 bg-[#E8618CFF] rounded-[4px] flex justify-center items-center">
          <PiPaintBrushDuotone className="h-[32px] w-[32px] text-white" />
        </div>
        <p className="font-inter text-[#171A1FFF] font-[400] text-lg">
          "Industrial Revolution's impact on geopolitics."
        </p>
      </div>
      <div className="h-18 w-3/4 rounded-md border-[1px] border-[#F3F4F6FF] border-solid flex items-center gap-3 hover:bg-gray-50 cursor-pointer">
        <div className="h-16 w-20 bg-[#F2F2FDFF] rounded-[4px] flex justify-center items-center">
          <FaCode className="h-[36px] w-[36px] text-[#878CEDFF]"></FaCode>
        </div>
        <p className="font-inter text-[#171A1FFF] font-[400] text-lg">
          "Http request in Javascript?"
        </p>
      </div>
      <div className="h-18 w-3/4 rounded-md border-[1px] border-[#F3F4F6FF] border-solid flex items-center gap-3 hover:bg-gray-50 cursor-pointer">
        <div className="h-16 w-20 bg-[#F2F2FDFF] rounded-[4px] flex justify-center items-center">
          <MdOutlineLocationOn className="h-[36px] w-[36px] text-[#878CEDFF]" />
        </div>
        <p className="font-inter text-[#171A1FFF] font-[400] text-lg">
          "Tell me about the history of Eiffel Tower."
        </p>
      </div>
    </div>
  );
};

export default NewChat;
