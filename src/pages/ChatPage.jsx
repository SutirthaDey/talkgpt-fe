import React, { useState } from "react";
import NewChat from "../features/Chat/NewChat";
import Conversation from "../features/Chat/Conversation";

import ChatInput from "../components/ChatInput";

const ChatPage = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");

  return (
    <div className="w-full min-h-96 h-screen flex flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent mt-5 py-5 relative">
      <div className="mt-5 mb-10 w-3/4 mx-auto flex flex-col pb-24">
        {chatHistory.length === 0 ? <NewChat /> : <Conversation />}
      </div>

      <ChatInput message={message} setMessage={setMessage} />
    </div>
  );
};

export default ChatPage;
