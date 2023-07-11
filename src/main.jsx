import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Root
import Root from "./routes/Root";

// Pages
import Home from "./routes/Home";
import Terms from "./routes/Terms";
import About from "./routes/About";
import Error from "./routes/Error";
import Contact from "./routes/Contact";
import Privacy from "./routes/Privacy";
import Register from "./routes/Register";

// css
import "./css/index.css";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "AboutUs",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
