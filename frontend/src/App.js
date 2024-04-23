import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  /* React Router Configuration */
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        // {
        //   path: "add",
        //   element: <AddTodo />,
        // },
        // {
        //   path: "update",
        //   element: <UpdateTodo />,
        // },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
