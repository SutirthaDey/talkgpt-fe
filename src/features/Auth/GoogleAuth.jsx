import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useApiRequest } from "../../hooks/useApiRequest";
import { saveUserAndTokens } from "../../utils/saveUserAndTokens";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";
import { googleClientId } from "../../constants/enviroment";
import toast from "react-hot-toast";
import { normalizeError } from "../../utils/normalizeError";

export const GoogleAuth = ({ loader, setLoader }) => {
  const navigate = useNavigate();
  const apiRequest = useApiRequest();
  const { setUser } = useContext(UserContext);
  const { setIsAuthenticated } = useAuth();

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <GoogleLogin
        buttonText="Login"
        onSuccess={async (response) => {
          try {
            setLoader(true);
            const res = await apiRequest("auth/google-authentication", {
              method: "POST",
              body: { googleToken: response.credential },
            });

            const { data } = res;

            saveUserAndTokens(data.user, {
              accessToken: data?.tokens?.accessToken,
              refreshToken: data?.token?.refreshToken,
            });

            setUser(data.user);
            setIsAuthenticated(true);

            navigate("/chat");
            setLoader(false);
            toast.success("Logged in successfully");
          } catch (error) {
            setLoader(false);
            const message = normalizeError(error.message);

            if (message.includes("ThrottlerException")) {
              toast.error("Too many attempts. Try again later");
            } else {
              toast.error(message);
            }
          }
        }}
      />
    </GoogleOAuthProvider>
  );
};
