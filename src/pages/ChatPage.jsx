import React, { useContext, useEffect, useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import ChatInput from "../components/ChatInput";
import { Outlet, useNavigate } from "react-router-dom";
import { useApiRequest } from "../hooks/useApiRequest";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { baseUrl } from "../constants/enviroment";
import { UserContext } from "../contexts/UserContext";
import SessionsContext from "../contexts/SessionContext";
import FancyDynamicLoader from "../components/FancyDynamicLoader";
import GlobalWheel from "../components/GlobalWheel";
import { normalizeError } from "../utils/normalizeError";

const ChatPage = () => {
  let { id } = useParams();
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");
  const { user } = useContext(UserContext);
  const { setSessions } = useContext(SessionsContext);
  const apiRequest = useApiRequest();
  const eventSourceRef = useRef(null);
  const navigate = useNavigate();
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    async function fetchHistoryByChat() {
      const path = `chat/${id}`;
      setIsLoader(false);
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

  useEffect(() => {
    if (!id) return;
    setChatHistory([]);

    const path = `streaming/stream/${id}`;
    // Connect to SSE stream
    const source = new EventSource(baseUrl + path);
    eventSourceRef.current = source;
    let isFirstChunk = true;
    let lastMessageId = null;

    source.onmessage = async (event) => {
      const chunk = JSON.parse(event.data)?.data || "";

      if (chunk === "[STREAM_END]") {
        isFirstChunk = true;
        // source.close();
        return;
      }

      if (isFirstChunk) {
        lastMessageId = uuidv4();

        setChatHistory((prev) => [
          ...prev,
          {
            id: lastMessageId,
            message: "",
            role: "system",
            createdAt: new Date(),
          },
        ]);

        isFirstChunk = false;
      }

      setChatHistory((prev) =>
        prev.map((c) =>
          c.id === lastMessageId ? { ...c, message: `${c.message}${chunk}` } : c
        )
      );
    };

    source.onerror = (err) => {
      console.error("SSE error:", err);
      source.close();
    };

    return () => {
      source.close();
    };
  }, [id]);

  const sendMessage = async () => {
    if (!message) return;

    const useMessage = {
      id: uuidv4(),
      message,
      role: "user",
      createdAt: new Date(),
    };

    try {
      setChatHistory((prev) => [...prev, useMessage]);
      setMessage("");

      const path = id ? `chat/${id}` : "chat";
      if (!id) {
        setIsLoader(true);
      }

      const { data } = await apiRequest(path, {
        method: "POST",
        body: {
          message: message,
          chatHistory: [...chatHistory, useMessage]
            .map((c) => {
              return {
                role: c.role,
                content: c.message,
              };
            })
            .slice(-10),
        },
      });

      if (data?.session) {
        setSessions((prev) => [data.session, ...prev]);
        navigate(`/chat/c/${data.session.id}`);
        setIsLoader(false);
      }
    } catch (error) {
      const message = normalizeError(error.message);

      if (message.includes("ThrottlerException")) {
        toast.error("Your Quota has been exceeded. Please try after 5 mins.");
      } else {
        toast.error(message);
      }
    }
  };

  useEffect(() => {
    if (!user) return;
    const userId = typeof user == "object" ? user.id : JSON.parse(user).id; // or however you store it

    if (!userId) return;

    const source = new EventSource(`${baseUrl}streaming/sessions/${userId}`);

    source.onmessage = (event) => {
      // const sessionId = JSON.parse(event.data)?.data;
      // navigate(`/chat/c/${sessionId}`);
    };

    source.onerror = (err) => {
      console.error("Session SSE error:", err);
      source.close();
    };

    return () => {
      source.close();
    };
  }, [user, navigate]);

  // if (isLoader) return <FancyDynamicLoader />;

  return (
    <>
      {isLoader && <GlobalWheel text="Initializing Conversation..." />}
      <div className="w-full min-h-96 h-screen flex flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-track-transparent mt-5 py-5 relative">
        <div className="mt-5 mb-10 w-[70%] mx-auto flex flex-col pb-24">
          <Outlet context={{ setMessage, chatHistory }}></Outlet>
        </div>

        <ChatInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </>
  );
};

export default ChatPage;
