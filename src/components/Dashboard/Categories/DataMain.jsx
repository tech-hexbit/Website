import React, { useState, useEffect, useContext } from "react";

// components
import DataTab from "./DataTab";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// css
import DM from "./Css/DataMain.module.css";

export default function DataMain() {
  const [data, setData] = useState({
    totalOrders: 0,
    accepted: 0,
    cancelled: 0,
    completed: 0,
  });

  useEffect(() => {
    loadData();
  }, []);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    try {
      const response = await axios.get(`/api/common/Inventory/Data`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setData({
          totalOrders: response.data.totalOrders,
          accepted: response.data.accepted,
          cancelled: response.data.cancelled,
          completed: response.data.completed,
        });
      } else {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={DM.mDiv}>
      <DataTab bgColor="#FCEBFF" label="TOTAL ORDERS" val={data.totalOrders} />
      <DataTab bgColor="#FDFFE0" label="ACCEPTED" val={data.accepted} />
      <DataTab bgColor="#E4EAFF" label="COMPLETED" val={data.completed} />
      <DataTab bgColor="#DCFEF0" label="CANCELLED" val={data.cancelled} />
    </div>
  );
}
