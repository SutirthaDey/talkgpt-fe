import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) return <Loading />;

  if (isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
