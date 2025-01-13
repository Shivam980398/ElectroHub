import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";
import StoreItemProvider from "./context/StoreItem.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <StoreItemProvider>
        <App />
      </StoreItemProvider>
    </StoreContextProvider>
  </BrowserRouter>
);
