import React, { useState, useEffect, useContext } from "react";

// components
import HeaderTabs from "./Sellers/HeaderTabs";
import AllSellers from "./Sellers/AllSellers";
import ContionalSellers from "./Sellers/ContionalSellers";

// state
import AuthContext from "./.././../store/auth-context";

// axios
import axios from "axios";

export default function Sellers({ head }) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [loadNow, setloadNow] = useState(false);
  const [SellerType, setSellerType] = useState("all");

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    loadData();

    setloadNow(false);
  }, [, loadNow]);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(`/api/website/admin/usersList`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        console.log(response.data.sellerList);
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
      {head && (
        <HeaderTabs setSellerType={setSellerType} SellerType={SellerType} />
      )}

      <div>
        {SellerType === "all" ? (
          <AllSellers load={load} setLoad={setloadNow} data={data} />
        ) : (
          ""
        )}
        {SellerType === "Verified" ? <ContionalSellers state={true} /> : ""}
        {SellerType === "notVerified" ? <ContionalSellers state={false} /> : ""}
      </div>
    </div>
  );
}
