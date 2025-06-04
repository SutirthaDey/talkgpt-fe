import { useNavigate } from "react-router-dom";

export const useLogOut = () => {
  const navigate = useNavigate();

  return () => {
    localStorage.clear();
    navigate("/login");
  };
};
