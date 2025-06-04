import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) return <div>Loading...</div>;

  if (isAuthenticated === false) {
    toast.error("session expired!");

    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
