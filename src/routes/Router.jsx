import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Casino from "../pages/casino/Casino";
import Slot from "../pages/slot/Slot";
import TableGames from "@/pages/tableGames/TableGames";
import SportsBook from "@/pages/sportsBook/SportsBook";
import Fishing from "@/pages/fishing/Fishing";
import Crash from "@/pages/crash/Crash";
import Promotion from "@/pages/promotion/Promotion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/casino",
        element: <Casino />,
      },
      {
        path: "/slot",
        element: <Slot />,
      },
      {
        path: "/table-games",
        element: <TableGames />,
      },
      {
        path: "/sports-book",
        element: <SportsBook />,
      },
      {
        path: "/fishing",
        element: <Fishing />,
      },
      {
        path: "/crash",
        element: <Crash />,
      },
      {
        path: "/promotion",
        element: <Promotion />,
      },
    ],
  },
]);

export default router;
