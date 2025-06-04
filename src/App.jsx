import { RouterProvider } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./contexts/UserContext";
import appRouter from "./router/routes";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <UserProvider>
      <AuthProvider>
        <Toaster position="top-center" />
        <RouterProvider router={appRouter} />
      </AuthProvider>
    </UserProvider>
  );
}

export default App;
