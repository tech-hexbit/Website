import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useState, useEffect, useContext, Suspense } from "react";

import { Helmet } from "react-helmet";

const Home = React.lazy(() => import("./Pages/Home"));
const Terms = React.lazy(() => import("./Pages/Terms"));
const About = React.lazy(() => import("./Pages/About"));
const Error = React.lazy(() => import("./Pages/Error"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const Privacy = React.lazy(() => import("./Pages/Privacy"));
const Register = React.lazy(() => import("./Pages/Register"));
const SignIn = React.lazy(() => import("./Pages/SignIn"));

import AuthContext from "./store/auth-context";
import axios from "axios";

import LoadingPage from "./MicroInteraction/Loading";

import Nav from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MobileNav from "./components/header/MobileHeader";

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

        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
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
