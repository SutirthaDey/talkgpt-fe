import React, { useState } from "react";
import NewChat from "../features/Dashboard/NewChat";
import Conversation from "../features/Dashboard/Conversation";
import { BsFillSendFill } from "react-icons/bs";
import { GrMicrophone } from "react-icons/gr";

const DashboardPage = () => {
  const [chatHistory, setChatHistory] = useState([3]);
  const [message, setMessage] = useState(null);
  return (
    <div className="w-full min-h-96 h-screen flex flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent mt-5 py-5 relative">
      <div className="mt-5 mb-10 w-3/4 mx-auto flex flex-col pb-24">
        {chatHistory.length === 0 ? <NewChat /> : <Conversation />}
      </div>

      {/* Centered input box at bottom */}
      <div className="fixed bottom-3 left-1/2 transform -translate-x-1/3 w-full max-w-4xl px-5">
        <div className="relative">
          <input
            className="h-[56px] w-full border-[1px] border-[#636AE8FF] text-black px-4 pr-20 rounded-md shadow-[0px_8px_17px_#636AE826,_0px_0px_2px_#636AE81F]"
            placeholder="Type your message..."
            value={message}
            type="textbox"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={(e) => setMessage(e.target.value)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#636AE8FF]"
          >
            <BsFillSendFill className="size-6" />
          </button>
          <button className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-600">
            <GrMicrophone className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
