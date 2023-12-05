import React, { useState, useEffect, useContext } from "react";

// state
import AuthContext from "./.././../../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// css
import SelCss from "./../Css/Sellers.module.css";

export default function ContionalSellers(props) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      let body = { state: props.state };

      const response = await axios.post(`/api/website/admin/usersList`, body, {
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

  return <div>ContionalSellers</div>;
}
