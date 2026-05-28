import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  ToastContainer,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Wishlist from "./Pages/Wishlist/Wishlist";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import FAQ from "./Pages/FAQ/FAQ";
import ShippingReturns from "./Pages/ShippingReturns/ShippingReturns";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import OrderSuccess from "./Pages/OrderSuccess/OrderSuccess";

import AdminOrders
from "./Pages/Admin/AdminOrders";

import AdminDashboard
from "./Pages/Admin/AdminDashboard";

import AdminProducts
from "./Pages/Admin/AdminProducts";

import AdminLogin
from "./Pages/Admin/AdminLogin";

import AdminMessages
from "./Pages/Admin/AdminMessages";

import AdminRoute
from "./Components/AdminRoute";

import MyOrders
from "./Pages/MyOrders/MyOrders";

import MobileBottomNav
from "./Components/Navbar/MobileBottomNav";


function AppContent() {

  const location =
    useLocation();

  return (
    <>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/faq"
          element={<FAQ />}
        />

        <Route
          path="/shipping-returns"
          element={
            <ShippingReturns />
          }
        />

        <Route
          path="/privacy-policy"
          element={
            <PrivacyPolicy />
          }
        />

        <Route
          path="/order-success"
          element={
            <OrderSuccess />
          }
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetails />
          }
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/my-orders"
          element={<MyOrders />}
        />

        {/* Admin Routes */}

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin/orders"
          element={
            <AdminRoute>
              <AdminOrders />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <AdminProducts />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/messages"
          element={
            <AdminMessages />
          }
        />

      </Routes>

      {/* Mobile Bottom Navbar */}

      <MobileBottomNav />

      {/* Toast */}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />

    </>
  );
}

function App() {

  return (

    <BrowserRouter>

      <AppContent />

    </BrowserRouter>
  );
}

export default App;