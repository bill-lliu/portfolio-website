import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ViewProvider } from "./contexts/ViewContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ViewProvider>
      <App />
    </ViewProvider>
  </React.StrictMode>
);
