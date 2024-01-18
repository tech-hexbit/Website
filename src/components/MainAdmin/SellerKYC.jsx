import React, { useState, useEffect, useContext } from "react";

// components
import HeaderTabs from "./../Admin/Sellers/HeaderTabs";

// state
import AuthContext from "./.././../store/auth-context";

// axios
import axios from "axios";

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
      <HeaderTabs setSellerType={setSellerType} SellerType={SellerType} />
    </div>
  );
}
