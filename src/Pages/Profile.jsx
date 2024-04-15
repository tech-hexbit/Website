import React, { useEffect, useContext, useState, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

// axios
import axios from "axios";

// helmet
import { Helmet } from "react-helmet";

// components
const Error = React.lazy(() => import("./../Pages/Error"));
//          || SideBar
import UserSideBar from "./../components/Dashboard/UserSideBar";
//          || User
const StoreVerify = React.lazy(() => import("./StoreVerify"));
const Sales = React.lazy(() => import("./../components/Dashboard/Sales"));
const Contact = React.lazy(() => import("./../components/Dashboard/Contact"));
const Support = React.lazy(() => import("./../components/Dashboard/Support"));
const Products = React.lazy(() => import("./../components/Dashboard/Products"));
const HelpDesk = React.lazy(() => import("./../components/Dashboard/HelpDesk"));
const PayDetails = React.lazy(() =>
  import("../components/Dashboard/PayDetails")
);
const PayRequest = React.lazy(() =>
  import("../components/Dashboard/PayRequest")
);
const ProfileMain = React.lazy(() =>
  import("./../components/Dashboard/Profile")
);
const Complaints = React.lazy(() =>
  import("./../components/Dashboard/Complaints")
);
const Categories = React.lazy(() =>
  import("./../components/Dashboard/Categories")
);
const AddProduct = React.lazy(() =>
  import("./../components/Dashboard/AddProduct")
);
const Dashboard = React.lazy(() =>
  import("./../components/Dashboard/DashboardMain")
);
const Orderdetails = React.lazy(() =>
  import("./../components/Dashboard/Orderdetails")
);
const ProductsPage = React.lazy(() =>
  import("./../components/ProductsPage/ProductsPage")
);
const ProductPageNew = React.lazy(() =>
  import("../components/ProductsPage/ProductPageNew")
);
const VerifyEmail = React.lazy(() =>
  import("../components/Dashboard/MainParts/VerifyEmail")
);
const HelpDeskTable = React.lazy(() =>
  import("./../components/Dashboard/HelpDesk/HelpDeskFormTable")
);
//          || Admin
const Payment = React.lazy(() => import("../components/Admin/Payment"));
const TicketAdmin = React.lazy(() => import("./../components/Admin/Ticket"));
const SupportAdmin = React.lazy(() => import("./../components/Admin/Support"));
const SellersAdmin = React.lazy(() => import("./../components/Admin/Sellers"));
//          || Super Admin
const FrontPage = React.lazy(() =>
  import("./../components/MainAdmin/FrontPage")
);
const SelectSellerDetail = React.lazy(() =>
  import("../components/Admin/Sellers/Seller Main/SelectSellerDetail")
);

// state
import AuthContext from "./../store/auth-context";

// MicroInteraction
import Load from "./../MicroInteraction/LoadBlack";
import LoadingPage from "./../MicroInteraction/Loading";

// Css
import PCss from "./Css/Profile.module.css";

export default function Profile() {
  const [load, setLoad] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const authCtx = useContext(AuthContext);

  const resendMail = async () => {
    setLoad(true);

    try {
      const response = await axios.get(
        `/api/website/auth/verification/resend/${authCtx.user.Email}`
      );

      if (response.data.status) {
        setLoad(false);

        setShowModal(true);
      } else {
        setLoad(false);
      }
    } catch (e) {
      setLoad(false);

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Unable to Send Mail",
      });

      console.log(e);
    }
  };

  const closePopup = () => {
    setShowModal(false);
  };

  return (
    <>
      <Helmet>
        <title>HexBit.io - Profile</title>
      </Helmet>

      <div className={PCss.mDiv}>
        <UserSideBar />

        {authCtx.user.Store[0].StoreID.validation ? (
          <>
            <div className={PCss.CDiv}>
              {/* email verification */}
              <>
                {authCtx.user.emailVerified ? (
                  <></>
                ) : (
                  <>
                    {load ? (
                      <div className="loadCenterDiv" id="loadPadding">
                        <Load />
                      </div>
                    ) : (
                      <p className={PCss.alert}>
                        <span>
                          <>
                            <Link to="#" onClick={resendMail}>
                              <div className={PCss.icon}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  class="lucide lucide-alert-circle"
                                >
                                  <circle cx="12" cy="12" r="10" />
                                  <line x1="12" x2="12" y1="8" y2="12" />
                                  <line x1="12" x2="12.01" y1="16" y2="16" />
                                </svg>
                              </div>
                              Email Verification Pending !! CLICK TO VERIFY
                            </Link>
                          </>
                        </span>
                      </p>
                    )}

                    {showModal && <VerifyEmail onClose={closePopup} />}
                  </>
                )}
              </>

              <Routes>
                <Route path="/" element={<ProfileMain />} />

                {/* Admin */}
                {authCtx.user.access === 0 && (
                  <>
                    <Route
                      path="/admin/tickets"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <TicketAdmin />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/admin/support"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <SupportAdmin />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/admin/sellers"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <SellersAdmin />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/admin/paymentdetails"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <Payment />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/*"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <Error />
                        </Suspense>
                      }
                    />
                  </>
                )}

                {/* Super Admin */}
                {authCtx.user.access === 2 && (
                  <>
                    <Route
                      path="/admin/super/List"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <FrontPage />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/admin/paymentdetails"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <Payment />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/admin/super/SellerKYC"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <SellersAdmin head={true} />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/admin/super/Support"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <SupportAdmin />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/admin/super/Ticket"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <TicketAdmin />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/admin/super/SellerInfo"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <SelectSellerDetail />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/products/:id"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <ProductPageNew />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/*"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <Error />
                        </Suspense>
                      }
                    />
                  </>
                )}

                {/* Users */}
                {authCtx.user.access === 1 && (
                  <>
                    <Route
                      path="/sales"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <Sales />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/faqs"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <Support />
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
                      path="/products"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <Products />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/help/desk"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <HelpDesk />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/dashboard"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <Dashboard />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/Inventory"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <Categories />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/complaints"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <Complaints />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/addProduct"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <AddProduct />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/products/:id"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <ProductPageNew />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/Payment/Details"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <PayDetails />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/Payment/Request"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <PayRequest />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/orderdetails/:id"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <Orderdetails />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/help/desk/ViewMore"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <HelpDeskTable />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/*"
                      element={
                        <Suspense fallback={<LoadingPage />}>
                          <Error />
                        </Suspense>
                      }
                    />
                  </>
                )}

                <Route
                  path="/*"
                  element={
                    <Suspense fallback={<LoadingPage />}>
                      <Error />
                    </Suspense>
                  }
                />
              </Routes>
            </div>
          </>
        ) : (
          <>
            {/* Users */}
            {authCtx.user.access === 1 && (
              <>
                <Routes>
                  <Route path="/" element={<StoreVerify />} />
                  <Route
                    path="/*"
                    element={
                      <Suspense fallback={<LoadingPage />}>
                        <Error />
                      </Suspense>
                    }
                  />
                </Routes>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
