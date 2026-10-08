import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Preloader from "./components/Preloader";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname, search]);

  return null;
};

const NotFound = () => {
  return (
    <main className="min-h-screen pt-32 px-5 flex items-center justify-center bg-black text-white">
      <div className="text-center">

        <p className="text-zinc-500 text-xs tracking-[0.3em]">
          AURABUDS
        </p>

        <h1 className="text-7xl sm:text-9xl font-black mt-3">
          404
        </h1>

        <p className="text-zinc-500 mt-4">
          This page doesn't exist.
        </p>

        <a
          href="/"
          className="inline-flex mt-7 px-7 py-3 rounded-full bg-white !text-black font-bold text-sm"
        >
          Back Home
        </a>

      </div>
    </main>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />

        <Route
          path="/products/:id"
          element={
            <Layout>
              <ProductDetails />
            </Layout>
          }
        />

        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />

        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />

        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />

        <Route
          path="/checkout"
          element={
            <Layout>
              <Checkout />
            </Layout>
          }
        />

        <Route
          path="/order-confirmation"
          element={
            <Layout>
              <OrderConfirmation />
            </Layout>
          }
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <Preloader
          onComplete={handleComplete}
        />
      )}

      <div
        className={
          loading
            ? "aurabuds-app-hidden"
            : "aurabuds-app-visible"
        }
      >
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;