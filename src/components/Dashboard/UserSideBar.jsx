import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// state
import AuthContext from "./../../store/auth-context";

// Css
import sidebarCSS from "./Css/UserSideBar.module.css";

export default function UserSideBar() {
  const authCtx = useContext(AuthContext);

  const redirect = useNavigate();

  const logout = async () => {
    redirect("/signIn");

    authCtx.logout();
  };

  return (
    <div className={sidebarCSS.mainDiv}>
      {authCtx.user.access === 0 ? (
        // Admin
        <>
          {/* Seller Verification */}
          <NavLink
            to="/me/admin/sellers"
            className={({ isActive }) =>
              isActive
                ? "LinkStyle sideBarActive"
                : "LinkStyle sideBarNonActive"
            }
          >
            <div className={sidebarCSS.navElement}>
              <div className={sidebarCSS.icons}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-badge-help"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" x2="12.01" y1="17" y2="17" />
                </svg>
              </div>
              <div className={sidebarCSS.heading}>
                <div className={sidebarCSS.arrow}></div>
                Sellers
              </div>
            </div>
          </NavLink>

          {/* Support */}
          <NavLink
            to="/me/admin/support"
            className={({ isActive }) =>
              isActive
                ? "LinkStyle sideBarActive"
                : "LinkStyle sideBarNonActive"
            }
          >
            <div className={sidebarCSS.navElement}>
              <div className={sidebarCSS.icons}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-helping-hand"
                >
                  <path d="m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19" />
                  <path d="m2 14 6 6" />
                </svg>
              </div>
              <div className={sidebarCSS.heading}>
                <div className={sidebarCSS.arrow}></div>
                Support
              </div>
            </div>
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/me/admin/contact"
            className={({ isActive }) =>
              isActive
                ? "LinkStyle sideBarActive"
                : "LinkStyle sideBarNonActive"
            }
          >
            <div className={sidebarCSS.navElement}>
              <div className={sidebarCSS.icons}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-send"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </div>
              <div className={sidebarCSS.heading}>
                <div className={sidebarCSS.arrow}></div>
                Contact
              </div>
            </div>
          </NavLink>
        </>
      ) : (
        // Users
        <>
          {/* Dashboard */}
          <NavLink
            to="/me/dashboard"
            className={({ isActive }) =>
              isActive
                ? "LinkStyle sideBarActive"
                : "LinkStyle sideBarNonActive"
            }
          >
            <div className={sidebarCSS.navElement}>
              <div className={sidebarCSS.icons}>
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
                  class="lucide lucide-layout-panel-left"
                  className="temp"
                >
                  <rect width="7" height="18" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                </svg>
              </div>
              <div className={sidebarCSS.heading}>
                <div className={sidebarCSS.arrow}></div>
                Dashboard
              </div>
            </div>
          </NavLink>

          {/* Inventory */}
          <NavLink
            to="/me/Inventory"
            className={({ isActive }) =>
              isActive
                ? "LinkStyle sideBarActive"
                : "LinkStyle sideBarNonActive"
            }
          >
            <div className={sidebarCSS.navElement}>
              <div className={sidebarCSS.icons}>
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
                  class="lucide lucide-shopping-bag"
                  className="temp"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <div className={sidebarCSS.heading}>
                <div className={sidebarCSS.arrow}></div>
                Inventory
              </div>
            </div>
          </NavLink>

          {/* Products */}
          <NavLink
            to="/me/products"
            className={({ isActive }) =>
              isActive
                ? "LinkStyle sideBarActive"
                : "LinkStyle sideBarNonActive"
            }
          >
            <div className={sidebarCSS.navElement}>
              <div className={sidebarCSS.icons}>
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
                  class="lucide lucide-clipboard-list"
                  className="temp"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="M12 11h4" />
                  <path d="M12 16h4" />
                  <path d="M8 11h.01" />
                  <path d="M8 16h.01" />
                </svg>
              </div>
              <div className={sidebarCSS.heading}>
                <div className={sidebarCSS.arrow}></div>
                Products
              </div>
            </div>
          </NavLink>

          {/* Sales */}
          <NavLink
            to="/me/sales"
            className={({ isActive }) =>
              isActive
                ? "LinkStyle sideBarActive"
                : "LinkStyle sideBarNonActive"
            }
          >
            <div className={sidebarCSS.navElement}>
              <div className={sidebarCSS.icons}>
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
                  class="lucide lucide-line-chart"
                  className="temp"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <div className={sidebarCSS.heading}>
                <div className={sidebarCSS.arrow}></div>
                Sales
              </div>
            </div>
          </NavLink>

          {/* Add product */}
          <NavLink
            to="/me/addProduct"
            className={({ isActive }) =>
              isActive
                ? "LinkStyle sideBarActive"
                : "LinkStyle sideBarNonActive"
            }
          >
            <div className={sidebarCSS.navElement}>
              <div className={sidebarCSS.icons}>
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
                  class="lucide lucide-package-plus"
                  className="temp"
                >
                  <path d="M16 16h6" />
                  <path d="M19 13v6" />
                  <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                  <path d="m7.5 4.27 9 5.15" />
                  <polyline points="3.29 7 12 12 20.71 7" />
                  <line x1="12" x2="12" y1="22" y2="12" />
                </svg>
              </div>
              <div className={sidebarCSS.heading}>
                <div className={sidebarCSS.arrow}></div>
                Add Product
              </div>
            </div>
          </NavLink>

          {/* Payment Details */}
          <NavLink
            to="/me/Payment/Details"
            className={({ isActive }) =>
              isActive
                ? "LinkStyle sideBarActive"
                : "LinkStyle sideBarNonActive"
            }
          >
            <div className={sidebarCSS.navElement}>
              <div className={sidebarCSS.icons}>
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
                  class="lucide lucide-credit-card"
                  className="temp"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <div className={sidebarCSS.heading}>
                <div className={sidebarCSS.arrow}></div>
                Payment Details
              </div>
            </div>
          </NavLink>

          {/* Payment Request */}
          <NavLink
            to="/me/Payment/Request"
            className={({ isActive }) =>
              isActive
                ? "LinkStyle sideBarActive"
                : "LinkStyle sideBarNonActive"
            }
          >
            <div className={sidebarCSS.navElement}>
              <div className={sidebarCSS.icons}>
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
                  class="lucide lucide-badge-indian-rupee"
                  className="temp"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="M8 8h8" />
                  <path d="M8 12h8" />
                  <path d="m13 17-5-1h1a4 4 0 0 0 0-8" />
                </svg>
              </div>
              <div className={sidebarCSS.heading}>
                <div className={sidebarCSS.arrow}></div>
                Payment Request
              </div>
            </div>
          </NavLink>

          {/* Seller Support */}
          <NavLink
            to="/me/faqs"
            className={({ isActive }) =>
              isActive
                ? "LinkStyle sideBarActive"
                : "LinkStyle sideBarNonActive"
            }
          >
            <div className={sidebarCSS.navElement}>
              <div className={sidebarCSS.icons}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-helping-hand"
                  className="temp"
                >
                  <path d="m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19" />
                  <path d="m2 14 6 6" />
                </svg>
              </div>
              <div className={sidebarCSS.heading}>
                <div className={sidebarCSS.arrow}></div>
                FAQ
              </div>
            </div>
          </NavLink>

          {/* Help Desk */}
          <NavLink
            to="/me/help/desk"
            className={({ isActive }) =>
              isActive
                ? "LinkStyle sideBarActive"
                : "LinkStyle sideBarNonActive"
            }
          >
            <div className={sidebarCSS.navElement}>
              <div className={sidebarCSS.icons}>
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
                  class="lucide lucide-heart-handshake"
                  className="temp"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                  <path d="m18 15-2-2" />
                  <path d="m15 18-2-2" />
                </svg>
              </div>
              <div className={sidebarCSS.heading}>
                <div className={sidebarCSS.arrow}></div>
                Help Desk
              </div>
            </div>
          </NavLink>
        </>
      )}

      {/* Logout */}
      <div onClick={logout}>
        <div className={sidebarCSS.navElement}>
          <div className={sidebarCSS.icons}>
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
              class="lucide lucide-log-out"
              className={sidebarCSS.logoutIcon}
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
          </div>
          <div className={sidebarCSS.heading} id={sidebarCSS.headingLogout}>
            <div className={sidebarCSS.arrow}></div>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}
