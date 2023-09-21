import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// components
import Sales from "./../components/Dashboard/Sales";
import Gateway from "../components/Dashboard/Gateway";
import Products from "./../components/Dashboard/Products";
import ProfileMain from "./../components/Dashboard/Profile";
import Categories from "./../components/Dashboard/Categories";
import AddProduct from "./../components/Dashboard/AddProduct";
import Dashboard from "./../components/Dashboard/DashboardMain";
import Orderdetails from "./../components/Dashboard/Orderdetails";
//          || SideBar
import UserSideBar from "./../components/Dashboard/UserSideBar";

// Css
import PCss from "./Css/Profile.module.css";

export default function Profile() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={PCss.mDiv}>
      <UserSideBar />
      <div className={PCss.CDiv}>
        <Routes>
          <Route path="/" element={<ProfileMain />} />

          <Route path="/sales" element={<Sales />} />
          <Route path="/gateway" element={<Gateway />} />
          <Route path="/products" element={<Products />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/orderdetails/:id" element={<Orderdetails />} />
        </Routes>
      </div>
    </div>
  );
}
