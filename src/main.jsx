import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ScreenProvider } from "./contexts/ScreenContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScreenProvider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        defaultColorScheme="light"
        theme={{
          headings: {
            fontFamily: "Cabin Sketch, sans-serif",
            textAlign: "center",
          },
          // headings: { fontFamily: "Patrick Hand, cursive" },
          fontFamily: "Balsamiq Sans, sans-serif",
          primaryColor: "violet",
          defaultRadius: "xl",
        }}
      >
        <App />
      </MantineProvider>
    </ScreenProvider>
  </React.StrictMode>
);
