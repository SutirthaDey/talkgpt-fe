import { useNavigate } from "react-router-dom";

const ToAuth = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[90%] max-w-[550px] h-auto sm:h-[450px] bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-red-400 rounded-xl flex flex-col justify-center items-center z-20 p-4 sm:p-6">
      <img
        src="/assests/selection.png"
        alt="jelly"
        className="mx-auto mt-4 sm:mt-8 w-24 sm:w-32"
      />
      <h1 className="text-[20px] sm:text-[28px] md:text-[32px] font-archivo text-[#171A1FFF] font-semibold tracking-[0.020em] mt-2 text-center">
        Unleash Nova.ai Conversations
      </h1>
      <p className="font-inter text-[14px] sm:text-[16px] text-[#9095A0FF] mt-2 leading-6 text-center">
        To continue, kindly log in with your account
      </p>
      <div className="w-full flex flex-col px-4 sm:px-20 md:px-36 justify-center gap-3 mt-8">
        <button
          onClick={() => navigate("/signup")}
          className="h-[48px] bg-[#171A1FFF] text-white rounded-md font-normal font-inter leading-6 text-base hover:bg-[#272c35]"
        >
          Sign up
        </button>
        <button
          onClick={() => navigate("/login")}
          className="h-[48px] text-[#171A1FFF] font-normal font-inter leading-6 text-base hover:bg-[#ececec]"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default ToAuth;
