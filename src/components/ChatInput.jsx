import { BsFillSendFill } from "react-icons/bs";
import { TbMessageDots } from "react-icons/tb";

<TbMessageDots className="text-gray-600 animate-pulse" size={26} />;

// import { GrMicrophone } from "react-icons/gr";

const ChatInput = ({ message, setMessage, sendMessage, acceptInput }) => {
  return (
    <div className="fixed bottom-3 left-[50%] md:left-[50%] lg:left-[60%] translate-x-[-50%] w-[95%] sm:w-[90%] md:max-w-2xl lg:max-w-4xl px-2 sm:px-5">
      <div className="relative">
        <input
          className="h-14 w-full border border-[#636AE8FF] text-black px-4 pr-20 rounded-md shadow-[0px_8px_17px_#636AE826,_0px_0px_2px_#636AE81F] text-sm sm:text-base"
          placeholder="Type your message..."
          value={message}
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
        />

        <button
          onClick={sendMessage}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#636AE8FF] hover:text-[#7c81e6]"
        >
          {acceptInput ? (
            <BsFillSendFill className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <div className="bg-gray-200 rounded-full px-2.5 py-2 flex items-center gap-1 w-fit">
              <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:0s]" />
              <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
