import React, { useCallback, useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { useApiRequest } from "../hooks/useApiRequest";
import { useLogOut } from "../hooks/useLogOut";
import { normalizeError } from "../utils/normalizeError";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const apiRequest = useApiRequest();
  const [sessions, setSessions] = useState([]);
  const logOut = useLogOut();
  const navigate = useNavigate();

  const fetchSessions = useCallback(async () => {
    const url = "chat/sessions";
    try {
      const { data } = await apiRequest(url);
      setSessions(data);
    } catch (error) {
      const message = normalizeError(error.message);
      toast.error(message);
      logOut();
    }
  }, [apiRequest, logOut]);

  useEffect(() => {
    fetchSessions();
  }, [fetchSessions]);

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
        onClick={() => navigate("/chat/?fresh=true")}
      >
        + New chat
      </button>
      <div className="h-4/6 w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
        <div className="flex flex-col gap-3 my-5">
          <p className="font-archivo text-[12px] font-[500] text-[#171A1F66]">
            Conversation History
          </p>
          {sessions.map((item) => (
            <div
              className="text-[#565E6CFF] font-inter font-[400] cursor-pointer tracking-normal ml-2 hover:text-[#313338] hover:bg-red-100 p-1 hover:rounder-md"
              key={item.id}
              onClick={() => navigate(`c/${item.id}`)}
            >
              <p>{item.title}</p>
            </div>
          ))}
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
