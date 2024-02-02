import { React, useState } from "react";

// components
import Sellers from "../../Sellers";
import SellerOrder from "./SellerOrder";
import SellerInventory from "./SellerInventory";

// css
import SSDCss from "./CSS/selectSellerDetail.module.css";

function SelectSellerDetail() {
  const [activeTab, setActiveTab] = useState("Seller Details");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={SSDCss.main}>
      <div className={SSDCss.mainSec}>
        <p className={SSDCss.topText}>DETAILS OF STORE A</p>
        <div className={SSDCss.slide}>
          <div
            className={`${SSDCss.slideSec} ${
              activeTab === "Seller Details" ? SSDCss.slideSecClicked : ""
            }`}
            onClick={() => handleTabClick("Seller Details")}
          >
            <p>Seller Details</p>
          </div>
          <div
            className={`${SSDCss.slideSec} ${
              activeTab === "Seller Inventory" ? SSDCss.slideSecClicked : ""
            }`}
            onClick={() => handleTabClick("Seller Inventory")}
          >
            <p>Seller Inventory</p>
          </div>
          <div
            className={`${SSDCss.slideSec} ${
              activeTab === "Seller Orders" ? SSDCss.slideSecClicked : ""
            }`}
            onClick={() => handleTabClick("Seller Orders")}
          >
            <p>Seller Orders</p>
          </div>
        </div>
        {activeTab === "Seller Details" ? <Sellers /> : ""}
        {activeTab === "Seller Inventory" ? <SellerInventory /> : ""}
        {activeTab === "Seller Orders" ? <SellerOrder /> : ""}
      </div>
    </div>
  );
}

export default SelectSellerDetail;
