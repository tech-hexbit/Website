import React, { useState, useEffect, useContext } from "react";

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
  const [load, setLoad] = useState(false);
  const [showRef, setRef] = useState(false);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    loadData();
    setRef(false);
  }, [, showRef]);

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
    console.log(data);
  }, []);

  return <div>Sellers</div>;
}
