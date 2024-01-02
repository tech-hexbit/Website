import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";

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
//          || Admin
import ContactAdmin from "./../components/Admin/Contact";
import SupportAdmin from "./../components/Admin/Support";
import SellersAdmin from "./../components/Admin/Sellers";

// state
import AuthContext from "./../store/auth-context";

// Css
import PCss from "./Css/Profile.module.css";

export default function Profile() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const authCtx = useContext(AuthContext);

  return (
    <>
      <Helmet>
        <title>HexBit.io - Profile</title>
      </Helmet>

      <div className={PCss.mDiv}>
        <UserSideBar />
        <div className={PCss.CDiv}>
          <Routes>
            <Route path="/" element={<ProfileMain />} />

            {authCtx.user.access === 0 ? (
              // Admin
              <>
                <Route path="/admin/support" element={<SupportAdmin />} />
                <Route path="/admin/sellers" element={<SellersAdmin />} />
                <Route path="/admin/contact" element={<ContactAdmin />} />
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
                <Route path="/orderdetails/:id" element={<Orderdetails />} />
                <Route path="/help/desk/ViewMore" element={<HelpDeskTable />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </>
  );
}
