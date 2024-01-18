import React, { useState, useEffect, useContext } from "react";

// state
import AuthContext from "./.././../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";

// css
import SelCss from "./Css/Sellers.module.css";

export default function SellerKYC() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [loadNow, setloadNow] = useState(false);
  const [SellerType, setSellerType] = useState("all");

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(`/api/website/admin/usersList`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setData(response.data.sellerList);

        setLoad(false);
      } else {
        setLoad(false);

        console.log(e);
      }
    } catch (e) {
      setLoad(false);

      console.log(e);
    }
  };

  useEffect(() => {
    loadData();

    setloadNow(false);
  }, [, loadNow]);
  return (
    <div>
      <div className={SelCss.typesOfUsers}>
        <div className={SelCss.AllSellersIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 60 60"
            fill="none"
            stroke="#69339E"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-users-round"
            id={SellerType === "all" ? "Selcolor" : "notSelColor"}
            onClick={() => {
              setSellerType("all");
            }}
          >
            <path d="M40.0635 51.4283L40.0643 43.3939C40.0647 38.9559 36.4671 35.358 32.0291 35.358H14.036C9.59871 35.358 6.0014 38.9549 6.0009 43.3923L6 51.4283M53.9993 51.4287L54 43.3943C54.0004 38.9563 50.4028 35.3585 45.9649 35.3585M38.5158 10.1527C40.4891 11.6168 41.7679 13.964 41.7679 16.6098C41.7679 19.2556 40.4891 21.6028 38.5158 23.0669M31.2345 16.6094C31.2345 21.047 27.637 24.6445 23.1994 24.6445C18.7617 24.6445 15.1642 21.047 15.1642 16.6094C15.1642 12.1717 18.7617 8.57422 23.1994 8.57422C27.637 8.57422 31.2345 12.1717 31.2345 16.6094Z" />

            <path d="M40.0635 51.4283L40.0643 43.3939C40.0647 38.9559 36.4671 35.358 32.0291 35.358H14.036C9.59871 35.358 6.0014 38.9549 6.0009 43.3923L6 51.4283M53.9993 51.4287L54 43.3943C54.0004 38.9563 50.4028 35.3585 45.9649 35.3585M38.5158 10.1527C40.4891 11.6168 41.7679 13.964 41.7679 16.6098C41.7679 19.2556 40.4891 21.6028 38.5158 23.0669M31.2345 16.6094C31.2345 21.047 27.637 24.6445 23.1994 24.6445C18.7617 24.6445 15.1642 21.047 15.1642 16.6094C15.1642 12.1717 18.7617 8.57422 23.1994 8.57422C27.637 8.57422 31.2345 12.1717 31.2345 16.6094Z" />
          </svg>
          <div className={SelCss.IconText}>
            {" "}
            <p>All Sellers</p>
          </div>
        </div>

        <div className={SelCss.AllSellersIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 60 60"
            fill="none"
            stroke="#FF3D00"
            stroke-width="2.4"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-badge-info"
            id={SellerType === "notVerified" ? "Selcolor" : "notSelColor"}
            onClick={() => {
              setSellerType("notVerified");
            }}
          >
            <path d="M30 30V18.75M30 38.3386V38.4375M52.5 30C52.5 42.4264 42.4264 52.5 30 52.5C17.5736 52.5 7.5 42.4264 7.5 30C7.5 17.5736 17.5736 7.5 30 7.5C42.4264 7.5 52.5 17.5736 52.5 30Z" />
          </svg>

          <div className={SelCss.IconText}>
            {" "}
            <p>PENDING</p>
          </div>
        </div>
        <div className={SelCss.AllSellersIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-check-circle"
            id={SellerType === "Verified" ? "Selcolor" : "notSelColor"}
            onClick={() => {
              setSellerType("Verified");
            }}
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
          </svg>

          <div className={SelCss.IconText}>
            <p>APPROVED</p>
          </div>
        </div>
      </div>
    </div>
  );
}
