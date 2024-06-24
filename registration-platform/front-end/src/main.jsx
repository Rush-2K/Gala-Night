import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import Header from './components/Header';
import Payment from './pages/Payment';
import Seat from './pages/Seat';
import SeatDetails from './pages/SeatDetails';
import Pax from './pages/Pax';
import Confirmation from './pages/Confirmation';

const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
};

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/payment",
          element: <Payment />,
        },
        {
          path: "/seat",
          element: <Seat />,
        },
        {
          path: "seat/:seatid",
          element: <SeatDetails />
        },
        {
          path: "pax",
          element: <Pax />
        },
        {
          path: "confirm",
          element: <Confirmation />
        },
      ],
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
