import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";

// helmet
import { Helmet } from "react-helmet";

// components
//          || SideBar
import UserSideBar from "./../components/Dashboard/UserSideBar";
//          || User
import Sales from "./../components/Dashboard/Sales";
import Gateway from "../components/Dashboard/Gateway";
import Products from "./../components/Dashboard/Products";
import ProfileMain from "./../components/Dashboard/Profile";
import Categories from "./../components/Dashboard/Categories";
import AddProduct from "./../components/Dashboard/AddProduct";
import Dashboard from "./../components/Dashboard/DashboardMain";
import Orderdetails from "./../components/Dashboard/Orderdetails";
//          || Admin
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
              </>
            ) : (
              // Users
              <>
                <Route path="/sales" element={<Sales />} />
                <Route path="/gateway" element={<Gateway />} />
                <Route path="/products" element={<Products />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/addProduct" element={<AddProduct />} />
                <Route path="/orderdetails/:id" element={<Orderdetails />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </>
  );
}
