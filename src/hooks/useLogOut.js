import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useLogOut = () => {
  const navigate = useNavigate();

  return useCallback(() => {
    localStorage.clear();
    navigate("/login");
  }, [navigate]);
};
