import { Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./contexts/UserContext";
import appRouter from "./router/routes";

function App() {
  return (
    <UserProvider>
      <RouterProvider router={appRouter}>
        <div className="App">
          <Outlet></Outlet>
        </div>
      </RouterProvider>
    </UserProvider>
  );
}

export default App;
