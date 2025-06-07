// SessionsContext.js
import React, { createContext, useState, useEffect } from "react";
import { useApiRequest } from "../hooks/useApiRequest";
import toast from "react-hot-toast";
import { useAuth } from "./AuthContext";

const SessionsContext = createContext();

export const SessionsProvider = ({ children }) => {
  const apiRequest = useApiRequest();
  const [sessions, setSessions] = useState([]);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) return;

    async function fetchSessions() {
      const url = "chat/sessions";
      const { data } = await apiRequest(url);
      setSessions(data);
    }

    try {
      fetchSessions();
    } catch {
      toast.error("Could not fetch sessions");
    }
  }, [apiRequest, isAuthenticated]); // empty deps => runs once on mount

  return (
    <SessionsContext.Provider value={{ sessions, setSessions }}>
      {children}
    </SessionsContext.Provider>
  );
};

export default SessionsContext;
