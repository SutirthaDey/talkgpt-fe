import React, { useState } from "react";
import clsx from "clsx";
import { FaCode } from "react-icons/fa6";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { RxQuestionMark } from "react-icons/rx";
import { MdOutlineLocationOn } from "react-icons/md";
import { useSearchParams, useOutletContext } from "react-router-dom";

const suggestions = [
  {
    id: 1,
    icon: <RxQuestionMark className="h-[36px] w-[36px] text-[#636AE8FF]" />,
    bg: "bg-[#F2F2FDFF]",
    text: `"Industrial Revolution's impact on geopolitics."`,
  },
  {
    id: 2,
    icon: <PiPaintBrushDuotone className="h-[32px] w-[32px] text-white" />,
    bg: "bg-[#E8618CFF]",
    text: `"Art's role in shaping cultural identity and collective memory."`,
  },
  {
    id: 3,
    icon: <FaCode className="h-[36px] w-[36px] text-[#878CEDFF]" />,
    bg: "bg-[#F2F2FDFF]",
    text: `"Http request in Javascript?"`,
  },
  {
    id: 4,
    icon: (
      <MdOutlineLocationOn className="h-[36px] w-[36px] text-[#878CEDFF]" />
    ),
    bg: "bg-[#F2F2FDFF]",
    text: `"Tell me about the history of Eiffel Tower."`,
  },
];

const NewChat = () => {
  const [searchParams] = useSearchParams();
  const { setMessage } = useOutletContext();
  const [selectedText, setSelectedText] = useState(null);
  const isFresh = searchParams.get("fresh") === "true";

  const onSuggestionSelect = (id, text) => {
    setSelectedText(id);
    setMessage(text);
  };

  if (isFresh) return <></>;

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="font-archivo text-[48px] font-[700] text-[#171A1FFF] leading-[68px] mb-10">
        Ask everything you want!
      </h1>
      {suggestions.map(({ id, icon, bg, text }) => (
        <div
          key={id}
          className={clsx(
            "h-18 w-3/4 rounded-md border-[1px] border-[#F3F4F6FF] border-solid flex items-center gap-3 hover:bg-gray-50 cursor-pointer",
            selectedText === id ? "bg-[#fbecf1] hover:bg-[#fbecf1]" : ""
          )}
          onClick={() => onSuggestionSelect(id, text)}
        >
          <div
            className={clsx(
              "h-16 w-20 rounded-[4px] flex justify-center items-center",
              bg
            )}
          >
            {icon}
          </div>
          <p className="font-inter text-[#171A1FFF] font-[400] text-lg">
            {text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NewChat;
