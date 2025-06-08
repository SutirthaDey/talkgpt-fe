import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const useLogOut = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  return useCallback(() => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate("/login");
  }, [navigate, setIsAuthenticated]);
};
