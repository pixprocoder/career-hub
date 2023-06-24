import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Home from "./components/Home/Home.jsx";
import Statistics from "./components/Statistics/statistics.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/service",
        element: <div>This is for testing</div>,
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
