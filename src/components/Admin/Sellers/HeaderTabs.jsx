import React from "react";
import PropTypes from "prop-types";

// css
import SelCss from "./../Css/Sellers.module.css";

export default function HeaderTabs({ SellerType, setSellerType }) {
  return (
    <div className={SelCss.typesOfUsers}>
      {/* All Sellers */}
      <div
        className={SelCss.AllSellersIcon}
        onClick={() => {
          setSellerType("all");
        }}
      >
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
          class="lucide lucide-users-round"
          id={SellerType === "all" ? "Selcolor" : "notSelColor"}
        >
          <path d="M18 21a8 8 0 0 0-16 0" />
          <circle cx="10" cy="8" r="5" />
          <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
        </svg>

        <p
          className={
            SellerType === "all" ? SelCss.IconTextYes : SelCss.IconTextNo
          }
        >
          All Sellers
        </p>
      </div>

      {/* PENDING */}
      <div
        className={SelCss.AllSellersIcon}
        onClick={() => {
          setSellerType("notVerified");
        }}
      >
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
          class="lucide lucide-badge-info"
          id={SellerType === "notVerified" ? "Selcolor" : "notSelColor"}
          onClick={() => {
            setSellerType("notVerified");
          }}
        >
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
          <line x1="12" x2="12" y1="16" y2="12" />
          <line x1="12" x2="12.01" y1="8" y2="8" />
        </svg>

        <p
          className={
            SellerType === "notVerified"
              ? SelCss.IconTextYes
              : SelCss.IconTextNo
          }
        >
          Pending
        </p>
      </div>

      {/* APPROVED */}
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
        class="lucide lucide-badge-check"
        id={SellerType === "Verified" ? "Selcolor" : "notSelColor"}
        onClick={() => {
          setSellerType("Verified");
        }}
      >
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>

      <p
        className={
          SellerType === "Verified" ? SelCss.IconTextYes : SelCss.IconTextNo
        }
      >
        Approved
      </p>
    </div>
  );
}

HeaderTabs.propTypes = {
  SellerType: PropTypes.string.isRequired,
  setSellerType: PropTypes.func.isRequired,
};
