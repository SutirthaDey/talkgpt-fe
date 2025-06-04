import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AuthWrapper from "../features/Auth/AuthWrapper";
import ToAuth from "../features/Auth/ToAuth";
import DashboardLayout from "../features/Layout/DashboardLayout";
import DashboardPage from "../pages/DashboardPage";
import PrivateRoute from "../components/PrivateRoute";

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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout>
          <DashboardPage />
        </DashboardLayout>
      </PrivateRoute>
    ),
  },
]);

export default appRouter;
