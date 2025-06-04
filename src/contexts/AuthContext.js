// AuthProvider.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { useApiRequest } from "../hooks/useApiRequest";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const apiRequest = useApiRequest();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("accessToken");
      const url = "auth/verify-access";
      if (!token) return setIsAuthenticated(false);

      try {
        const res = await apiRequest(url, { method: "POST" });

        if (res.success) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      }
    };

    verifyToken();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
