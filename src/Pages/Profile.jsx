import React, { useEffect, useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

// axios
import axios from "axios";

// helmet
import { Helmet } from "react-helmet";

// components
//          || SideBar
import UserSideBar from "./../components/Dashboard/UserSideBar";
//          || User
import Sales from "./../components/Dashboard/Sales";
import Contact from "./../components/Dashboard/Contact";
import Support from "./../components/Dashboard/Support";
import Products from "./../components/Dashboard/Products";
import HelpDesk from "./../components/Dashboard/HelpDesk";
import PayDetails from "../components/Dashboard/PayDetails";
import PayRequest from "../components/Dashboard/PayRequest";
import ProfileMain from "./../components/Dashboard/Profile";
import Categories from "./../components/Dashboard/Categories";
import AddProduct from "./../components/Dashboard/AddProduct";
import Dashboard from "./../components/Dashboard/DashboardMain";
import Orderdetails from "./../components/Dashboard/Orderdetails";
import HelpDeskTable from "./../components/Dashboard/HelpDesk/HelpDeskFormTable";
import VerifyEmail from "../components/Dashboard/MainParts/VerifyEmail";
//          || Admin
import TicketAdmin from "./../components/Admin/Ticket";
import SupportAdmin from "./../components/Admin/Support";
import SellersAdmin from "./../components/Admin/Sellers";

// state
import AuthContext from "./../store/auth-context";

// MicroInteraction
import Load from "./../MicroInteraction/LoadBlack";
import { Alert } from "./../MicroInteraction/Alert";

// Css
import PCss from "./Css/Profile.module.css";

export default function Profile() {
  const [load, setLoad] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Unable to Send Mail",
        val: true,
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
                    <p className={PCss.alert}>
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
                        Email Verification Pending !!{" "}
                        <span>
                          {load ? (
                            <>
                              <Load />
                            </>
                          ) : (
                            "CLICK TO VERIFY"
                          )}
                        </span>
                      </Link>
                    </p>

                    {showModal && <VerifyEmail onClose={closePopup} />}
                  </>
                )}
              </>

              <Routes>
                <Route path="/" element={<ProfileMain />} />

                {authCtx.user.access === 0 ? (
                  // Admin
                  <>
                    <Route path="/admin/tickets" element={<TicketAdmin />} />
                    <Route path="/admin/support" element={<SupportAdmin />} />
                    <Route path="/admin/sellers" element={<SellersAdmin />} />
                  </>
                ) : (
                  // Users
                  <>
                    <Route path="/sales" element={<Sales />} />
                    <Route path="/faqs" element={<Support />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/help/desk" element={<HelpDesk />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/Inventory" element={<Categories />} />
                    <Route path="/addProduct" element={<AddProduct />} />
                    <Route path="/Payment/Details" element={<PayDetails />} />
                    <Route path="/Payment/Request" element={<PayRequest />} />
                    <Route
                      path="/orderdetails/:id"
                      element={<Orderdetails />}
                    />
                    <Route
                      path="/help/desk/ViewMore"
                      element={<HelpDeskTable />}
                    />
                  </>
                )}
              </Routes>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
