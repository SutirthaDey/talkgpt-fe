import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

export default appRouter;
