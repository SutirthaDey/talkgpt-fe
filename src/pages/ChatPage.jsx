import React, { useEffect, useState } from "react";

import ChatInput from "../components/ChatInput";
import { Outlet } from "react-router-dom";
import { useApiRequest } from "../hooks/useApiRequest";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ChatPage = () => {
  const { id } = useParams();
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");
  const apiRequest = useApiRequest();

  useEffect(() => {}, [message]);

  useEffect(() => {
    async function fetchHistoryByChat() {
      const path = `chat/${id}`;
      try {
        const response = await apiRequest(path);
        const data = response.data;

        setChatHistory(data);
      } catch {
        toast.error("Could not fetch chat history");
      }
    }

    if (id) fetchHistoryByChat();
  }, [id, apiRequest]);

  return (
    <div className="w-full min-h-96 h-screen flex flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent mt-5 py-5 relative">
      <div className="mt-5 mb-10 w-3/5 mx-auto flex flex-col pb-24 bg-red-100">
        <Outlet context={{ setMessage, chatHistory }}></Outlet>
      </div>

      <ChatInput message={message} setMessage={setMessage} />
    </div>
  );
};

export default ChatPage;
