import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useState, useEffect, useContext, Suspense } from "react";

// import { Helmet } from "react-helmet";

// components
import Nav from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MobileNav from "./components/header/MobileHeader";

// Pages
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Terms = React.lazy(() => import("./Pages/Terms"));
const Error = React.lazy(() => import("./Pages/Error"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const Privacy = React.lazy(() => import("./Pages/Privacy"));
//        || Auth
const Register = React.lazy(() => import("./Pages/Register"));
const SignIn = React.lazy(() => import("./Pages/SignIn"));
// Dashboard
const Dashboard = React.lazy(() => import("./Pages/User/Dashboard"));
const Categories = React.lazy(() => import("./Pages/User/Categories"));
const Products = React.lazy(() => import("./Pages/User/Products"));
const Sales = React.lazy(() => import("./Pages/User/Sales"));
const Gateway = React.lazy(() => import("./Pages/User/Gateway"));
const Profile = React.lazy(() => import("./Pages/User/Profile"));
const ProfilePage = React.lazy(() => import("./Pages/Profile"));
const AddProduct = React.lazy(() => import("./Pages/User/AddProduct"));
const TrackingPage = React.lazy(() => import("./Pages/TrackingPage"));

// MicroInteraction
import LoadingPage from "./MicroInteraction/Loading";

// state
import AuthContext from "./store/auth-context";

// axios
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Router>
      <Nav />
      <MobileNav />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/AboutUs"
          element={
            <Suspense fallback={<LoadingPage />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/privacy"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Privacy />
            </Suspense>
          }
        />
        <Route
          path="/terms"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Terms />
            </Suspense>
          }
        />
        <Route
          path="/Tracking/:id"
          element={
            <Suspense fallback={<LoadingPage />}>
              <TrackingPage />
            </Suspense>
          }
        />
        {!authCtx.isLoggedIn && (
          <Route
            path="/register"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Register />
              </Suspense>
            }
          />
        )}
        {!authCtx.isLoggedIn && (
          <Route
            path="/signIn"
            element={
              <Suspense fallback={<LoadingPage />}>
                <SignIn />
              </Suspense>
            }
          />
        )}
        {!authCtx.isLoggedIn && (
          <Route
            path="/me"
            element={
              <Suspense fallback={<LoadingPage />}>
                <ProfilePage />
              </Suspense>
            }
          />
        )}
        {authCtx.isLoggedIn && (
          <Route
            path="/user/dashboard"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Dashboard />
              </Suspense>
            }
          />
        )}
        {authCtx.isLoggedIn && (
          <Route
            path="/user/categories"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Categories />
              </Suspense>
            }
          />
        )}
        {authCtx.isLoggedIn && (
          <Route
            path="/user/products"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Products />
              </Suspense>
            }
          />
        )}
        {authCtx.isLoggedIn && (
          <Route
            path="/user/sales"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Sales />
              </Suspense>
            }
          />
        )}
        {authCtx.isLoggedIn && (
          <Route
            path="/user/gateway"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Gateway />
              </Suspense>
            }
          />
        )}
        {authCtx.isLoggedIn && (
          <Route
            path="/user/profile"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Profile />
              </Suspense>
            }
          />
        )}
        {authCtx.isLoggedIn && (
          <Route
            path="/user/addProduct"
            element={
              <Suspense fallback={<LoadingPage />}>
                <AddProduct />
              </Suspense>
            }
          />
        )}
        <Route
          path="*"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Error />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
