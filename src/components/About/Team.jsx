import React from "react";

// components
import Founders from "./Founders";
import Advisors from "./Advisors";
import CreativeTeam from "./CreativeTeam";

// css
import style from "./Css/Team.module.css";

export default function Team() {
  return (
    <div className={style.mainDiv}>
      <Founders />
      <CreativeTeam />
      <Advisors />
    </div>
  );
}
