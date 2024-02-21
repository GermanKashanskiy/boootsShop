import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import { products } from "../api/data/products.data";
import path from "path";
import ErrorBoundary from "../pages/404/ErrorBoundary";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "product/:article", element: <Product /> },
      { path: "test", element: "" },
    ],
    errorElement: <ErrorBoundary />,
  }
])
