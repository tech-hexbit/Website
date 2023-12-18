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
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  className="temp"
                >
                  <path d="M9.25043 2.74886V9.93023C9.25127 10.527 9.0145 11.0994 8.59264 11.5213C8.17077 11.9432 7.59832 12.18 7.00157 12.1791H2.24886C1.65233 12.1799 1.07988 11.9432 0.657793 11.5213C0.235923 11.0994 -0.000641227 10.527 1.30547e-06 9.93023V2.74886C-0.000626181 2.15233 0.235928 1.57988 0.657793 1.15779C1.07987 0.735923 1.65233 0.499359 2.24886 0.500001H7.00157C7.59832 0.499374 8.17076 0.735929 8.59264 1.15779C9.01451 1.57987 9.25129 2.15233 9.25043 2.74886ZM7.00157 13.6783H2.24886C1.65233 13.6775 1.07988 13.9143 0.657793 14.3361C0.235923 14.758 -0.000641227 15.3305 1.30547e-06 15.9272V18.2511C-0.000626181 18.8477 0.235928 19.4201 0.657793 19.8422C1.07987 20.2641 1.65233 20.5006 2.24886 20.5H7.00157C7.59832 20.5006 8.17076 20.2641 8.59264 19.8422C9.01451 19.4201 9.25129 18.8477 9.25043 18.2511V15.9272C9.25127 15.3305 9.0145 14.758 8.59264 14.3361C8.17077 13.9143 7.59832 13.6775 7.00157 13.6783ZM17.7511 0.500001H12.9984C12.4017 0.499374 11.8292 0.735929 11.4074 1.15779C10.9855 1.57987 10.7487 2.15233 10.7496 2.74886V18.251C10.7487 18.8476 10.9855 19.42 11.4074 19.8421C11.8292 20.264 12.4017 20.5005 12.9984 20.4999H17.7511C18.3477 20.5005 18.9201 20.264 19.3422 19.8421C19.7641 19.42 20.0006 18.8476 20 18.251V2.74886C20.0006 2.15233 19.7641 1.57988 19.3422 1.15779C18.9201 0.735923 18.3477 0.499359 17.7511 0.500001Z" />
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
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  className="temp"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.0136603 16.5037L0.0307466 16.3714L7.4637 16.3708L7.3753 16.5242C7.0878 17.0225 7.2597 17.6642 7.75744 17.952L8.25784 18.2411L1.54224 18.2422C1.08346 18.2422 0.68853 18.0635 0.385423 17.7189C0.0824755 17.3741 -0.0445716 16.9591 0.0138323 16.5037L0.0136603 16.5037ZM13.8438 20.2632L16.9028 14.9592C15.1671 14.9463 13.7338 14.0864 13.473 12.9648C13.4146 12.8552 13.3816 12.7298 13.3816 12.597C13.3816 12.1726 13.7186 11.8269 14.1392 11.8137C13.9718 12.0512 13.8792 12.3159 13.8792 12.597C13.8792 13.6538 15.2507 14.5106 16.9426 14.5106C17.7599 14.5106 18.5058 14.3129 19.0506 13.9937C20.3165 13.2519 20.3165 11.9421 19.0506 11.2003C18.2189 10.7128 17.0953 10.5915 16.1484 10.7472L16.3676 11.2916C17.1478 11.1897 18.0807 11.2916 18.763 11.6915C19.6544 12.2137 19.6544 12.9804 18.763 13.5027C18.1961 13.835 17.4677 13.9551 16.8176 13.9378L15.5959 10.9031C15.5134 10.6985 15.309 10.5803 15.0907 10.6111L11.3488 11.1408C11.1996 11.1619 11.0805 11.2426 11.0053 11.373L7.86928 16.8099C7.73897 17.036 7.81668 17.3268 8.04252 17.4572L13.1975 20.4369C13.4233 20.5672 13.7137 20.4892 13.844 20.2633L13.8438 20.2632ZM14.699 12.0241C15.0307 12.3345 15.0277 12.8681 14.6925 13.1749C14.3673 12.8087 14.3705 12.3866 14.699 12.0241ZM9.98946 15.9572L13.5208 17.9983C13.5984 18.0432 13.6254 18.1435 13.5804 18.2214L13.2537 18.788C13.2088 18.8658 13.1087 18.8927 13.0308 18.8477L9.49945 16.8066C9.42174 16.7617 9.39485 16.6614 9.43987 16.5835L9.76659 16.0169C9.81146 15.9394 9.91175 15.9125 9.98946 15.9572ZM14.3145 16.9476C14.4506 17.0258 14.4974 17.1999 14.4193 17.3361C14.3411 17.4724 14.1673 17.5192 14.0313 17.441L10.2175 15.2366C10.0814 15.1583 10.0346 14.9844 10.1127 14.8482C10.1909 14.7119 10.3646 14.6651 10.5007 14.7433L14.3145 16.9476ZM14.8045 16.0982C14.9406 16.1765 14.9874 16.3505 14.9093 16.4868C14.8311 16.623 14.6573 16.6699 14.5213 16.5916L10.7075 14.3872C10.5714 14.309 10.5246 14.1349 10.6027 13.9988C10.6809 13.8626 10.8547 13.8157 10.9908 13.894L14.8045 16.0982ZM15.2954 15.2489C15.4315 15.3277 15.478 15.5022 15.3991 15.6384C15.3204 15.7747 15.1461 15.8212 15.01 15.7423L11.1962 13.5376C11.0601 13.4588 11.0136 13.2843 11.0925 13.1482C11.1712 13.0119 11.3455 12.9653 11.4816 13.0443L15.2954 15.2489ZM9.55124 5.66678V4.18217C9.55124 2.7377 8.36887 1.55398 6.92602 1.55398C5.48317 1.55398 4.30079 2.7377 4.30079 4.18217V5.66785L3.24796 5.668V4.18217C3.24796 2.15597 4.90206 0.5 6.92598 0.5C8.9499 0.5 10.604 2.15597 10.604 4.18217V5.66647L9.55124 5.66678ZM6.92602 9.90113C8.51313 8.31222 10.2525 10.4353 9.03149 11.6577L6.92602 13.7655L4.82055 11.6577C3.59941 10.4354 5.33878 8.31237 6.92602 9.90113ZM0.103159 15.8022L0.174476 15.2459L8.11216 15.245L7.79123 15.8016L0.103159 15.8022ZM0.247577 14.6765L1.31391 6.35783C1.36353 5.9708 1.68788 5.68491 2.07774 5.68491L3.24795 5.68476V7.93319C3.24795 8.22428 3.48374 8.46005 3.77422 8.46005C4.06498 8.46005 4.30048 8.22414 4.30048 7.93319L4.30063 5.68445L9.55109 5.68341V7.93302C9.55109 8.22412 9.78673 8.45988 10.0773 8.45988C10.3681 8.45988 10.6036 8.22397 10.6036 7.93302L10.6038 5.68311L11.7738 5.68296C12.1635 5.68296 12.4882 5.96885 12.5381 6.35589L13.0465 10.3229L11.2682 10.5746C10.9455 10.6203 10.6731 10.8043 10.5102 11.087L8.44048 14.6758L0.247577 14.6765Z"
                  />
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
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  className="temp"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.8421 3.57276V2.17389C10.8421 2.05915 10.7382 1.96567 10.6111 1.96567L9.17157 1.96551C8.98764 1.96551 8.83833 1.83104 8.83833 1.66505C8.83833 1.34348 8.69384 1.05218 8.45997 0.84114C8.22626 0.63043 7.90318 0.5 7.54651 0.5C7.18984 0.5 6.86658 0.630275 6.63269 0.84114C6.39899 1.05185 6.25433 1.34315 6.25433 1.66505C6.25433 1.83104 6.10519 1.96551 5.92109 1.96551H4.4817C4.35443 1.96551 4.25076 2.05915 4.25076 2.17374V3.5726L10.8421 3.57276ZM3.58431 3.57276H1.18892C1.00499 3.57276 0.855678 3.70723 0.855678 3.87322V19.4269C0.855678 19.5927 1.00482 19.7273 1.18892 19.7273H8.57631V20.5H0.427962C0.192713 20.5 0 20.325 0 20.1131V3.18721C0 2.9751 0.192713 2.80135 0.427962 2.80135H3.5844L3.58431 3.57276ZM4.20207 8.9069H3.54626V9.4982H4.20207V8.9069ZM3.213 8.30615C3.02907 8.30615 2.87976 8.44062 2.87976 8.60661V9.79866C2.87976 9.96465 3.0289 10.0991 3.213 10.0991H4.53511C4.71905 10.0991 4.86836 9.96465 4.86836 9.79866V8.60661C4.86836 8.44078 4.71922 8.30615 4.53511 8.30615H3.213ZM4.20207 11.3544H3.54626V11.9457H4.20207V11.3544ZM3.213 10.7536C3.02907 10.7536 2.87976 10.8881 2.87976 11.0541V12.2461C2.87976 12.412 3.0289 12.5466 3.213 12.5466H4.53511C4.71905 12.5466 4.86836 12.4121 4.86836 12.2461V11.0541C4.86836 10.8883 4.71922 10.7536 4.53511 10.7536H3.213ZM4.20207 13.802H3.54626V14.3933H4.20207V13.802ZM3.213 13.2011C3.02907 13.2011 2.87976 13.3356 2.87976 13.5016V14.6936C2.87976 14.8595 3.0289 14.9941 3.213 14.9941H4.53511C4.71905 14.9941 4.86836 14.8596 4.86836 14.6936V13.5016C4.86836 13.3358 4.71922 13.2011 4.53511 13.2011H3.213ZM4.20207 16.2495H3.54626V16.8408H4.20207V16.2495ZM3.213 15.6486C3.02907 15.6486 2.87976 15.7831 2.87976 15.9491V17.1411C2.87976 17.307 3.0289 17.4416 3.213 17.4416H4.53511C4.71905 17.4416 4.86836 17.3071 4.86836 17.1411V15.9491C4.86836 15.7832 4.71922 15.6486 4.53511 15.6486H3.213ZM4.20207 6.45945H3.54626V7.05075H4.20207V6.45945ZM3.213 5.8587C3.02907 5.8587 2.87976 5.99317 2.87976 6.15916V7.35121C2.87976 7.51704 3.0289 7.65166 3.213 7.65166H4.53511C4.71905 7.65166 4.86836 7.5172 4.86836 7.35121V6.15916C4.86836 5.99333 4.71922 5.8587 4.53511 5.8587H3.213ZM15.093 10.1995V3.18746C15.093 2.97535 14.9002 2.8016 14.665 2.8016L11.5087 2.80144V3.57284H13.9041C14.0882 3.57284 14.2374 3.70731 14.2374 3.8733V10.1992L15.093 10.1995ZM15.7581 10.8002V12.1757C15.7581 12.3516 15.6224 12.5024 15.426 12.5024H13.9041C13.7202 12.5024 13.5709 12.3679 13.5709 12.2019V10.7999H12.1912C12.1403 10.7999 12.0989 10.8372 12.0989 10.8831V15.2657C12.0989 15.3116 12.1402 15.3489 12.1912 15.3489H17.0519C17.1029 15.3489 17.1442 15.3116 17.1442 15.2657V10.8835C17.1442 10.8376 17.1029 10.8003 17.0519 10.8003L15.7581 10.8002ZM14.2374 10.8002H15.0944V11.9016H14.2374V10.8002ZM18.5704 15.9499V17.3254C18.5704 17.5013 18.4347 17.6521 18.2384 17.6521H16.7163C16.5324 17.6521 16.3831 17.5176 16.3831 17.3518V15.9498H15.047C14.996 15.9498 14.9547 15.987 14.9547 16.033V20.4163C14.9547 20.4623 14.996 20.4995 15.047 20.4995H19.9077C19.9587 20.4995 20 20.4623 20 20.4163V16.0334C20 15.9874 19.9587 15.9502 19.9077 15.9502H18.5706L18.5704 15.9499ZM17.0494 15.9499H17.9063V17.0513L17.0494 17.0515V15.9499ZM12.8586 15.9499V17.3254C12.8586 17.5013 12.7229 17.6521 12.5269 17.6521H11.0048C10.8209 17.6521 10.6718 17.5176 10.6718 17.3518V15.9498H9.33568C9.2847 15.9498 9.24337 15.987 9.24337 16.033V20.4163C9.24337 20.4623 9.2847 20.4995 9.33568 20.4995H14.1964C14.2474 20.4995 14.2887 20.4623 14.2887 20.4163V16.0334C14.2887 15.9874 14.2474 15.9502 14.1964 15.9502H12.8588L12.8586 15.9499ZM11.3377 15.9499H12.1947V17.0513H11.3377V15.9499ZM5.74956 9.5934H11.88C12.0639 9.5934 12.2132 9.45893 12.2132 9.29294C12.2132 9.12695 12.0641 8.99248 11.88 8.99248L5.74956 8.99232C5.56546 8.99232 5.41632 9.12679 5.41632 9.29278C5.41632 9.45893 5.56563 9.5934 5.74956 9.5934ZM5.74956 7.14595H11.88C12.0639 7.14595 12.2132 7.01148 12.2132 6.84549C12.2132 6.67965 12.0641 6.54503 11.88 6.54503L5.74956 6.54487C5.56546 6.54487 5.41632 6.67934 5.41632 6.84533C5.41649 7.01148 5.56563 7.14595 5.74956 7.14595ZM5.74956 16.8459C5.56546 16.8459 5.41632 16.7114 5.41632 16.5455C5.41632 16.3795 5.56546 16.245 5.74956 16.245H8.57653V15.5579C8.57653 15.4432 8.68038 15.3497 8.80748 15.3497H11.4323V14.3984H5.74975C5.56565 14.3984 5.41651 14.264 5.41651 14.098C5.41651 13.9321 5.56565 13.7975 5.74975 13.7975H11.4327V11.9508L5.74975 11.9507C5.56565 11.9507 5.41651 11.8162 5.41651 11.6502C5.41651 11.4844 5.56565 11.3498 5.74975 11.3498H11.4327V10.4996C11.4327 10.3338 11.5818 10.1991 11.7658 10.1991H13.5711V4.17413H1.52232V19.1267H8.5764V16.8457L5.74956 16.8459ZM7.54686 1.27954C7.78348 1.27954 7.97534 1.45252 7.97534 1.66587C7.97534 1.87922 7.78348 2.0522 7.54686 2.0522C7.31023 2.0522 7.11837 1.87922 7.11837 1.66587C7.11837 1.45252 7.31023 1.27954 7.54686 1.27954Z"
                  />
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

          {/* Seller Support */}
          <NavLink
            to="/me/support"
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
                Support
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
