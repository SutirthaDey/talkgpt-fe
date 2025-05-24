import React from "react";
import { useNavigate } from "react-router-dom";

const ManualAuth = ({ type }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };

  return (
    <div className="w-3/4 h-44 mx-auto flex flex-col mt-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label
            className="text-left text-sm font-inter font-semibold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            placeholder="example.email@gmail.com"
            className=" bg-[#F3F4F6FF] font-inter outline-none h-10 px-3 text-sm hover:bg-[#E5E7EBFF] focus:bg-[#E5E7EBFF] focus:outline-none focus:border-2 focus:border-blue-400 rounded-md transform"
          ></input>
        </div>

        <div className="flex flex-col gap-1">
          <label
            className="text-left text-sm font-inter font-semibold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            className=" bg-[#F3F4F6FF] font-inter outline-none h-10 px-3 text-sm hover:bg-[#E5E7EBFF] focus:bg-[#E5E7EBFF] focus:outline-none focus:border-2 focus:border-blue-400 rounded-md transform"
          ></input>
        </div>

        <button
          type="submit"
          className="bg-[#171A1FFF] text-white p-2 rounded-md font-inter h-11 flex justify-center items-center text-lg px-4 mt-2 hover:bg-[#262A33FF]"
        >
          {type === "signup" ? "Sign Up" : "Sign In"}
        </button>
        {type === "signup" ? (
          <p className="text-sm font-inter text-[#171A1FFF">
            Already have an account?{" "}
            <span
              className="text-[#266bff] font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Sign In
            </span>
          </p>
        ) : (
          <p className="text-sm font-inter text-[#171A1FFF]">
            Don't have an account?{" "}
            <span
              className="text-[#266bff] font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Create Account
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default ManualAuth;
