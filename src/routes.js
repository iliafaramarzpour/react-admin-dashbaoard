import { useRoutes } from "react-router-dom";
import DashboardLayout from "./components/common/layout";
import Notfound from "./components/pages/404";
import Dashboard from "./pages/dashboard";

const Router = () => {
  return useRoutes([
    {
      element: <DashboardLayout />,
      children: [{ path: "/", element: <Dashboard /> }],
    },
    { path: "*", element: <Notfound /> },
  ]);
};

export default Router;
