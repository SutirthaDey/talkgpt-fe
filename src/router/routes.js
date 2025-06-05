import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AuthWrapper from "../features/Auth/AuthWrapper";
import ToAuth from "../features/Auth/ToAuth";
import GlobalLayout from "../layouts/GlobalLayout";
import ChatPage from "../pages/ChatPage";
import PrivateRoute from "../components/PrivateRoute";
import NewChat from "../features/Chat/NewChat";
import Conversation from "../features/Chat/Conversation";

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
        <GlobalLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <ChatPage />,
        children: [
          { path: "", element: <NewChat /> },
          { path: "c", element: <Conversation /> },
        ],
      },
    ],
  },
]);

export default appRouter;
