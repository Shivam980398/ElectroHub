import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";
import StoreItemProvider from "./context/StoreItem.jsx";
import { Provider } from "react-redux";
import { store } from "./components/redux/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchContextProvider from "./context/searchContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <StoreContextProvider>
        <StoreItemProvider>
          <SearchContextProvider>
            <App />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </SearchContextProvider>
        </StoreItemProvider>
      </StoreContextProvider>
    </BrowserRouter>
  </Provider>
);
