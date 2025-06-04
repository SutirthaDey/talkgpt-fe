import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AuthWrapper from "../features/Auth/AuthWrapper";
import ToAuth from "../features/Auth/ToAuth";
import ChatLayout from "../features/Layout/ChatLayout";
import ChatPage from "../pages/ChatPage";
import PrivateRoute from "../components/PrivateRoute";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      { path: "", element: <ToAuth /> },
      { path: "signup", element: <AuthWrapper type="signup" /> },
      { path: "login", element: <AuthWrapper type="login" /> },
    ],
  },
  {
    path: "/chat",
    element: (
      <PrivateRoute>
        <ChatLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "", element: <ChatPage /> },
      // Add more chat sub-pages here, e.g.:
      // { path: "settings", element: <SettingsPage /> },
    ],
  },
]);

export default appRouter;
