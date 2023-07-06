import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { FunContextProvider } from "./context/FunContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <FunContextProvider>
        <App />
      </FunContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
