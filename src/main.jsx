import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider>
        <App />
        <ToastContainer
  position="top-right"
  autoClose={2000}
/>
      </WishlistProvider>
    </CartProvider>
  </React.StrictMode>
);