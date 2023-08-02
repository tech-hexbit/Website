import React from "react";

import style from "./Css/Team.module.css";

import Founders from "./Founders";
import Advisors from "./Advisors";

export default function Team() {
  return (
    <div className={style.mainDiv}>
      <Founders />
      <Advisors />
    </div>
  );
}
