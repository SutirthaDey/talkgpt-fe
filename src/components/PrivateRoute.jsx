import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
// import Loading from "./LoadingPage";
import GlobalWheel from "./GlobalWheel";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) return <GlobalWheel />;

  if (isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
