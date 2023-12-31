import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// css
import "./index.css";

// store
import { AuthContextProvider } from "./store/auth-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
