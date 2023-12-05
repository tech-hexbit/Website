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

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.post(
        `/api/website/admin/usersList`,
        (state = props.state),
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

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
  }, [data]);

  return <div>ContionalSellers</div>;
}
