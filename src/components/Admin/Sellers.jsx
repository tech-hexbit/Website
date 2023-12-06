import React, { useState, useEffect, useContext } from "react";

// components
import AllSellers from "./Sellers/AllSellers";
import ContionalSellers from "./Sellers/ContionalSellers";

// state
import AuthContext from "./.././../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";

// css
import SelCss from "./Css/Sellers.module.css";

export default function Sellers() {
  const [data, setData] = useState([]);
  const [SellerType, setSellerType] = useState("all");
  const [load, setLoad] = useState(false);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    loadData();
  }, []);

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

  return (
    <div>
      <p>Sellers</p>

      <div className={SelCss.typesOfUsers}>
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
          onClick={() => {
            setSellerType("all");
          }}
        >
          <path d="M18 21a8 8 0 0 0-16 0" />
          <circle cx="10" cy="8" r="5" />
          <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
        </svg>
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
      </div>

      <div>
        {SellerType === "all" ? <AllSellers load={load} data={data} /> : ""}
        {SellerType === "Verified" ? <ContionalSellers state={true} /> : ""}
        {SellerType === "notVerified" ? <ContionalSellers state={false} /> : ""}
      </div>
    </div>
  );
}
