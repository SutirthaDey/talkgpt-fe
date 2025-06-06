import clsx from "clsx";
import React from "react";
import { useOutletContext } from "react-router-dom";

const Conversation = () => {
  const { chatHistory } = useOutletContext();
  console.log(chatHistory);
  return (
    <div className="flex flex-col gap-10">
      {chatHistory?.map((conv) => (
        <div
          className={clsx(
            "flex",
            conv.role === "user" ? "justify-end" : "justify-start"
          )}
        >
          <div
            className={clsx(
              "w-fit px-3 py-2 break-words rounded-2xl",
              conv.role === "user"
                ? "max-w-[33%] bg-[#636AE81A]  rounded-br-none"
                : "max-w-[100%] border-2 border-solid border-[#F3F4F6FF] rounded-tl-none"
            )}
          >
            <p>{conv.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Conversation;
