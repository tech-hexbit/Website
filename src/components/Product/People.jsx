import React from "react";

//css
import PCss from'./Css/People.module.css'


export default function People(props) {
  return (
    <>
        <div className={PCss.container}>
            <p>{props.name}</p>
            <p>10:30 AM</p>
        </div>
        <p className={PCss.msg}>{props.message}</p>
    </>
  );
}
