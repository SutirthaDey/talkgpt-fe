import { useContext, useState } from "react";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { useAuth } from "../../contexts/AuthContext";
import { useApiRequest } from "../../hooks/useApiRequest";
import { useNavigate } from "react-router-dom";
import { saveUserAndTokens } from "../../utils/saveUserAndTokens";
import { toast } from "react-hot-toast";
import { normalizeError } from "../../utils/normalizeError";
import { UserContext } from "../../contexts/UserContext";

const ManualAuth = ({ type, loader, setLoader }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useContext(UserContext);
  const { setIsAuthenticated } = useAuth();
  const apiRequest = useApiRequest();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const url = type === "signup" ? "auth/sign-up" : "auth/sign-in";

    try {
      setLoader(true);
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

      setUser(data.user);
      setIsAuthenticated(true);

      navigate("/chat");

      setLoader(false);

      const toastMessage =
        type === "signup"
          ? "Account created successfully"
          : "Logged in successfully";

      toast.success(toastMessage);
    } catch (error) {
      setLoader(false);
      const message = normalizeError(error.message);

      if (message.includes("ThrottlerException")) {
        toast.error("Too many attempts. Try again later");
      } else {
        toast.error(message);
      }
    }
  };

  return (
    <div className="w-[90%] sm:w-3/4 md:w-2/3 lg:w-3/4 h-auto mx-auto flex flex-col mt-5">
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
            className="bg-[#F3F4F6FF] font-inter outline-none h-10 px-3 text-sm hover:bg-[#E5E7EBFF] focus:bg-[#E5E7EBFF] focus:outline-none focus:border-2 focus:border-blue-400 rounded-md"
          />
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
              className="bg-[#F3F4F6FF] w-full font-inter outline-none h-10 px-3 text-sm hover:bg-[#E5E7EBFF] focus:bg-[#E5E7EBFF] focus:outline-none focus:border-2 focus:border-blue-400 rounded-md"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              {showPassword ? (
                <MdVisibilityOff
                  className="size-5 opacity-75 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <MdVisibility
                  className="size-5 opacity-75 cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#171A1FFF] text-white py-2 px-4 rounded-md font-inter h-11 flex justify-center items-center text-base sm:text-lg mt-2 hover:bg-[#262A33FF]"
        >
          {type === "signup" ? "Sign Up" : "Sign In"}
        </button>

        {type === "signup" ? (
          <p className="text-sm sm:text-base font-inter text-[#171A1FFF] text-center">
            Already have an account?{" "}
            <span
              className="text-[#266bff] font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Sign In
            </span>
          </p>
        ) : (
          <p className="text-sm sm:text-base font-inter text-[#171A1FFF] text-center">
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
