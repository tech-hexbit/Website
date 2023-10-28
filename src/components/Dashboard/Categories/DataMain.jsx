import React from "react";

// components
import DataTab from "./DataTab";

// css
import DM from "./Css/DataMain.module.css";

export default function DataMain(props) {
  return (
    <div className={DM.mDiv}>
      <DataTab bgColor="#FCEBFF" label="TOTAL ORDERS" val={123} />
      <DataTab bgColor="#FDFFE0" label="ACCEPTED" val={4} />
      <DataTab bgColor="#E4EAFF" label="COMPLETED" val={23} />
      <DataTab bgColor="#DCFEF0" label="CANCELLED" val={97} />
    </div>
  );
}
