import { Navigate, useRoutes } from "react-router-dom";
import Home from "@/pages/home";
import UserList from "@/pages/userList";
import Login from "@/pages/login";
import Register from "@/pages/register";
import TestPage from '@/pages/testPage'

const GetRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="/home/userList" />,
    },
    {
      path: "/home",
      element: <Home />,
      children: [
        {
          path: "/home/userList",
          element: <UserList />,
        },
        {
          path: "/home/testPage",
          element: <TestPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return routes;
};
export default GetRoutes;
