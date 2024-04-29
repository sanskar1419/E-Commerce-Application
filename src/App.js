import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import AddProduct from "./pages/NewProduct/AddProduct";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import Cart from "./pages/Cart/Cart";

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
        {
          path: ":id",
          element: <ProductDetail />,
        },
        {
          path: "add",
          element: <AddProduct />,
        },
        {
          path: "update/:id",
          element: <UpdateProduct />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;