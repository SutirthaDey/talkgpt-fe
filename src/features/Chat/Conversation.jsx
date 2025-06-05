import React from "react";
import { useOutletContext } from "react-router-dom";

const Conversation = () => {
  const { chatHistory } = useOutletContext();
  console.log(chatHistory);
  return (
    <div>
      {chatHistory?.map((conv) => (
        <p key={conv.id}>{conv.message}</p>
      ))}
    </div>
  );
};

export default Conversation;
