import { useState } from "react";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { useAuth } from "../../contexts/AuthContext";
import { useApiRequest } from "../../hooks/useApiRequest";
import { useNavigate } from "react-router-dom";
import { useLogOut } from "../../hooks/useLogOut";
import { saveUserAndTokens } from "../../utils/saveUserAndTokens";
import { toast } from "react-hot-toast";
import { normalizeError } from "../../utils/normalizeError";

const ManualAuth = ({ type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { setIsAuthenticated } = useAuth();
  const apiRequest = useApiRequest();
  const navigate = useNavigate();
  const logOut = useLogOut;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const url = type === "signup" ? "auth/sign-up" : "auth/sign-in";

    try {
      const response = await apiRequest(url, {
        method: "POST",
        needAuth: false,
        body: { email, password },
      });

      const { data } = response;

      saveUserAndTokens(data.user, {
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });

      setIsAuthenticated(true);

      navigate("/dashboard");
    } catch (error) {
      const message = normalizeError(error.message);
      toast.error(message);
    }
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
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="example.Abc@1234567"
              className=" bg-[#F3F4F6FF] w-full font-inter outline-none h-10 px-3 text-sm hover:bg-[#E5E7EBFF] focus:bg-[#E5E7EBFF] focus:outline-none focus:border-2 focus:border-blue-400 rounded-md transform"
            ></input>
            <div className="absolute right-1 top-1/4">
              {showPassword ? (
                <MdVisibilityOff
                  className="size-5 opacity-75"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <MdVisibility
                  className="size-5 opacity-75"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>
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
