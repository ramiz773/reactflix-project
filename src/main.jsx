import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import AppContextWrapper from "../src/Context/appContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContextWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContextWrapper>
);
