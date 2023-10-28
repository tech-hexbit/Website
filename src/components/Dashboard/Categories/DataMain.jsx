import React from "react";

// components
import DataTab from "./DataTab";

// css
import DM from "./Css/DataMain.module.css";

export default function DataMain(props) {
  return (
    <div className={DM.mDiv}>
      <DataTab bgColor="#FCEBFF" label="TOTAL ORDERS" val={23456} />
      <DataTab bgColor="#FDFFE0" label="Total s" val={23456} />
      <DataTab bgColor="#E4EAFF" label="Total s" val={23456} />
      <DataTab bgColor="#DCFEF0" label="Total s" val={23456} />
    </div>
  );
}
