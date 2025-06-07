import { RouterProvider } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./contexts/UserContext";
import appRouter from "./router/routes";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import { SessionsProvider } from "./contexts/SessionContext";

function App() {
  return (
    <UserProvider>
      <SessionsProvider>
        <AuthProvider>
          <Toaster position="top-center" />
          <RouterProvider router={appRouter} />
        </AuthProvider>
      </SessionsProvider>
    </UserProvider>
  );
}

export default App;
