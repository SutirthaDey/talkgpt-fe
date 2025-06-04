import { Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./contexts/UserContext";
import appRouter from "./router/routes";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <UserProvider>
      <AuthProvider>
        <RouterProvider router={appRouter}>
          <div className="App">
            <Outlet></Outlet>
          </div>
        </RouterProvider>
      </AuthProvider>
    </UserProvider>
  );
}

export default App;
