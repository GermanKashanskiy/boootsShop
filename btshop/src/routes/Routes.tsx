import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import ErrorBoundary from "../pages/404/ErrorBoundary";
import Brand from "../pages/brand/Brand";
import Brands from "../pages/brands/Brands";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "product/:article", element: <Product /> },
      { path: "brands", element: <Brands /> },
      { path: "brands/:brandArticle", element: <Brand /> },
    ],
    errorElement: <ErrorBoundary />,
  }
])
