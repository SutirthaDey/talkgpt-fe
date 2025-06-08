import clsx from "clsx";
import React, { useContext, useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { MarkdownRenderer } from "../../components/MarkDownRenderer";
import { UserContext } from "../../contexts/UserContext";

const Conversation = () => {
  const bottomRef = useRef(null);
  const { chatHistory } = useOutletContext();
  const { user } = useContext(UserContext);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    <div className="flex flex-col gap-10">
      {chatHistory?.map((conv) => (
        <div
          className={clsx(
            "flex relative",
            conv.role === "user" ? "justify-end" : "justify-start"
          )}
          key={conv.id}
        >
          {conv.role === "system" ? (
            <img
              src="/assests/nova.jpg"
              className="w-9 h-9 rounded-full absolute left-[-46px] top-2"
              alt="bot-image"
            ></img>
          ) : null}

          <div
            className={clsx(
              "w-fit px-3 py-2 break-words rounded-2xl",
              conv.role === "user"
                ? "max-w-[50%] bg-[#636AE81A]  rounded-br-none"
                : "max-w-[100%] border-2 border-solid border-[#F3F4F6FF] rounded-tl-none"
            )}
          >
            <MarkdownRenderer content={conv.message} />
          </div>
          {conv.role === "user" ? (
            <img
              src={user?.profile?.profilePic ?? "/assests/G1.jpg"}
              className="w-9 h-9 rounded-full absolute right-[-46px] top-2  object-fit bg-[#E8618CFF]"
              alt="user-image"
            ></img>
          ) : null}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default Conversation;
