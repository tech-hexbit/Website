import React, { useContext } from "react";
import { Link } from "react-router-dom";

// components
import ListBox from "./ListBox";

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
          <Link>
            <b>Go to profile</b>
          </Link>
        </p>
      </div>

      <div className={Acss.container}>
        <ListBox title="Seller info" label="Seller Data" />
        <ListBox
          title="Login & security"
          label="Update passwords and login credentials"
        />
        <ListBox
          title="Payments & payouts"
          label="Review payments, payouts, Invoices"
        />
        <ListBox
          title="Taxes"
          label="Manage taxpayer information and tax documents"
        />
        <ListBox
          title="Notifications"
          label="Send Communications Via E-mail."
        />
        <ListBox
          title="Data & sharing"
          label="Manage your personal data, connected services, and data sharing settings"
        />
        <ListBox
          title="Seller KYC"
          label="New Seller Data Validation and Approval."
        />
        <ListBox
          title="Support & Help Desk"
          label="Support and Help Desk Data"
        />
        <ListBox title="Inventory Statistics" label="Sales data" />
        <ListBox title="Inventory" label="Our Inventory" />
      </div>
    </>
  );
}
