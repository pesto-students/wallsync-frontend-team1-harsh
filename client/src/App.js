import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Landing from "./containers/landing/Landing";
import "./app.css";
import Login from "./containers/login/Login";
import Signup from "./containers/signUp/SignUp";
import Home from "./containers/home/Home";
import Profile from "./containers/profile/Profile";
import Settings from "./containers/settings/Settings";
import Repayments from "./containers/Repayments/Repayments";
import LiveMarket from "./containers/LiveMarket/LiveMarket";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Budget from "./containers/Budget/Budget";
import Split from "./containers/split/Split";

const App = () => {
  // const user = true;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/repayments",
      element: <Repayments />,
    },
    {
      path: "/live-market",
      element: <LiveMarket />,
    },
    {
      path: "/budget",
      element: <Budget />,
    },
    {
      path: "/split",
      element: <Split />,
    },
  ]);
  return (
    // <div className="App">
    // 	{/* <Landing /> */}
    // 	<Login />
    // 	{/* <Repayments /> */}
    // 	{/* <Signup /> */}
    // 	{/* <Home /> */}
    // 	{/* <Expense /> */}
    // 	{/* <LiveMarket /> */}
    // 	{/* <Profile /> */}
    // 	{/* <Settings /> */}
    // 	{/* <SplitBills /> */}
    // </div>
    <RouterProvider router={router} />
  );
};
export default App;
