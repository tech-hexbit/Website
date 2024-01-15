import React from "react";
import { Link } from "react-router-dom";

// components
import ListBox from "./ListBox";

// css
import Acss from "./Css/FrontPage.module.css";

export default function FrontPage() {
  return (
    <>
      <h2 className={Acss.acc}>Account</h2>
      <p className={Acss.accp}>
        <b>ADMIN QUCKBOARD,</b> hello@designdrops.io ·{" "}
        <Link>
          <b>Go to profile</b>
        </Link>
      </p>
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

        {/* Row 2 */}
        <div className={Acss.row}>
          <div className={Acss.column}>
            <div className={Acss.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-file"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <h3 className={Acss.a1}>Taxes</h3>
              <p className={Acss.a2}>
                Manage taxpayer information and tax documents
              </p>
            </div>
          </div>

          <div className={Acss.column}>
            <div className={Acss.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-megaphone"
              >
                <path d="m3 11 18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
              <h3 className={Acss.a1}>Notifications</h3>
              <p className={Acss.a2}>Send Communications Via E-mail.</p>
            </div>
          </div>

          <div className={Acss.column}>
            <div className={Acss.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-eye"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <h3 className={Acss.a1}>Data & Sharing</h3>
              <p className={Acss.a2}>
                Manage your personal data, connected services, and data sharing
                settings
              </p>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className={Acss.row}>
          <div className={Acss.column}>
            <div className={Acss.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-settings-2"
              >
                <path d="M20 7h-9" />
                <path d="M14 17H5" />
                <circle cx="17" cy="17" r="3" />
                <circle cx="7" cy="7" r="3" />
              </svg>
              <h3 className={Acss.a1}>Seller KYC</h3>
              <p className={Acss.a2}>
                New Seller Data Validation and Approval.
              </p>
            </div>
          </div>

          <div className={Acss.column}>
            <div className={Acss.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart-handshake"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                <path d="m18 15-2-2" />
                <path d="m15 18-2-2" />
              </svg>
              <h3 className={Acss.a1}>Support & Help Desk</h3>
              <p className={Acss.a2}>Support and Help Desk Data</p>
            </div>
          </div>

          <div className={Acss.column}>
            <div className={Acss.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-bar-chart-2"
              >
                <line x1="18" x2="18" y1="20" y2="10" />
                <line x1="12" x2="12" y1="20" y2="4" />
                <line x1="6" x2="6" y1="20" y2="14" />
              </svg>
              <h3 className={Acss.a1}>Inventory Statistics</h3>
              <p className={Acss.a2}>Sales data</p>
            </div>
          </div>
        </div>

        {/* Row 4*/}
        <div className={`${Acss.row} ${Acss.leftAlign}`}>
          <div className={Acss.column}>
            <div className={Acss.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-bag"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <h3 className={Acss.a1}>Inventory</h3>
              <p className={Acss.a2}>Our Inventory</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
