import React, { useContext, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
const ForgotPassword=React.lazy(()=>import("./Pages/ForgotPassword"));
const PasswordChanged=React.lazy(()=>import("./Pages/PasswordChanged"));
//        || Auth
const SignIn = React.lazy(() => import("./Pages/SignIn"));
const Register = React.lazy(() => import("./Pages/Register"));
//        || Dashboard
const Profile = React.lazy(() => import("./Pages/Profile"));
const TrackingPage = React.lazy(() => import("./Pages/TrackingPage"));

// MicroInteraction
import LoadingPage from "./MicroInteraction/Loading";

// state
import AuthContext from "./store/auth-context";

// axios
import axios from "axios";
import VerifyEmail from "./components/VerifyEmail";


axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Router>
      <Nav />
      <MobileNav />
      <div className="page">
        <div className="pageExt">
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
            <Route 
              path="/forgotpassword"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <ForgotPassword/>
                </Suspense>
              }
            />
            <Route 
              path="/changepwd"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <PasswordChanged/>
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
            {authCtx.isLoggedIn && (
              <Route
                path="/me/*"
                element={
                  <Suspense fallback={<LoadingPage />}>
                    <Profile />
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


            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;