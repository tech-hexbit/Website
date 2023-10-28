import React from "react";

// components
import DataTab from "./DataTab";

// css
import DM from "./Css/DataMain.module.css";

export default function DataMain(props) {
  return (
    <div>
      <DataTab bgColor="#FCEBFF" />
      <DataTab bgColor="" />
      <DataTab bgColor="red" />
      <DataTab bgColor="red" />
    </div>
  );
}
