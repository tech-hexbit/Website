import React, { useContext } from "react";
import { Link } from "react-router-dom";

// components
import ListBox from "./FrontPage/ListBox";

// state
import AuthContext from "./../../store/auth-context";

// css
import Acss from "./Css/FrontPage.module.css";

export default function FrontPage() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <div className={Acss.titleDiv}>
        <h2 className={Acss.acc}>Account</h2>
        <p className={Acss.accp}>
          <b>ADMIN QUCKBOARD,</b> {authCtx.user.Email} ·{" "}
          <Link to="/me">
            <b>Go to profile</b>
          </Link>
        </p>
      </div>

      <div className={Acss.container}>
        <ListBox
          title="Seller info"
          label="Seller Data"
          redirect="/me/admin/super/SellerInfo"
        />
        <ListBox
          title="Login & security"
          label="Update passwords and login credentials"
          redirect="/me"
        />
        <ListBox
          title="Payments & payouts"
          label="Review payments, payouts, Invoices"
          redirect="/me/admin/paymentdetails"
        />
        <ListBox
          title="Taxes"
          label="Manage taxpayer information and tax documents"
          redirect="/me"
        />
        <ListBox
          title="Notifications"
          label="Send Communications Via E-mail."
          redirect="/me"
        />
        <ListBox
          title="Data & sharing"
          label="Manage your personal data, connected services, and data sharing settings"
          redirect="/me"
        />
        <ListBox
          title="Seller KYC"
          label="New Seller Data Validation and Approval."
          redirect="/me/admin/super/SellerKYC"
        />
        <ListBox
          title="Support"
          label="Support data"
          redirect="/me/admin/super/Support"
        />
        <ListBox
          title="Help Desk"
          label="Help Desk Data"
          redirect="/me/admin/super/Ticket"
        />
        <ListBox title="Inventory Statistics" label="Sales data" />
        <ListBox title="Inventory" label="Our Inventory" />
      </div>
    </>
  );
}
