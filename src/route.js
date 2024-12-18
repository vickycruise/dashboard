import React, { Suspense } from "react";
import {  createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/ErrorPage";

// Lazy load pages
const Dashboard = React.lazy(() => import("./pages/Dashboard/DashboardPage"));
const Email = React.lazy(() => import("./pages/Email/EmailPage"));
const Chat = React.lazy(() => import("./pages/Chat/ChatPage"));
const Calendar = React.lazy(() => import("./pages/Calender/CalenderPage"));

// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading Dashboard...</div>}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "email",
        element: (
          <Suspense fallback={<div>Loading Email...</div>}>
            <Email />
          </Suspense>
        ),
      },
      {
        path: "chat",
        element: (
          <Suspense fallback={<div>Loading Chat...</div>}>
            <Chat />
          </Suspense>
        ),
      },
      {
        path: "calendar",
        element: (
          <Suspense fallback={<div>Loading Calendar...</div>}>
            <Calendar />
          </Suspense>
        ),
      },
      
    ],
  },
  {
    path: "*", // Catch-all route for 404
    element: <NotFound />,
  },
]);


export default router;
