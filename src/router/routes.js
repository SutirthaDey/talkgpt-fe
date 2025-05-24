import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AuthWrapper from "../features/Auth/AuthWrapper";
import ToAuth from "../features/Auth/ToAuth";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        path: "",
        element: <ToAuth />,
      },
      {
        path: "/signup",
        element: <AuthWrapper type="signup" />,
      },
      {
        path: "/login",
        element: <AuthWrapper type="login" />,
      },
    ],
  },
]);

export default appRouter;
