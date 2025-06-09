import { BsFillSendFill } from "react-icons/bs";
import { TbMessageDots } from "react-icons/tb";

<TbMessageDots className="text-gray-600 animate-pulse" size={26} />;

// import { GrMicrophone } from "react-icons/gr";

const ChatInput = ({ message, setMessage, sendMessage, acceptInput }) => {
  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/3 w-full max-w-4xl px-5">
      <div className="relative">
        <input
          className="h-[56px] w-full border-[1px] border-[#636AE8FF] text-black px-4 pr-20 rounded-md shadow-[0px_8px_17px_#636AE826,_0px_0px_2px_#636AE81F]"
          placeholder="Type your message..."
          value={message}
          type="textarea"
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault(); // optional: prevent newline if using <textarea>
              sendMessage();
            }
          }}
        />
        <button
          onClick={(e) => sendMessage()}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#636AE8FF] hover:text-[#7c81e6]"
        >
          {acceptInput ? (
            <BsFillSendFill className="size-6" />
          ) : (
            <div className="bg-gray-200 rounded-full px-3 py-2 inline-flex items-center gap-1 w-fit">
              <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:0s]" />
              <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          )}
          {/* <BsFillSendFill className="size-6" /> */}
        </button>
        {/* <button className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-600">
          <GrMicrophone className="size-5" />
        </button> */}
      </div>
    </div>
  );
};

export default ChatInput;
