// PrivateRoute.jsx
import { useAuth } from "../contexts/AuthContext";
import { useLogOut } from "../hooks/useLogOut";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const logOut = useLogOut();

  if (isAuthenticated === null) return <div>Loading...</div>;

  return isAuthenticated ? children : logOut();
};

export default PrivateRoute;
