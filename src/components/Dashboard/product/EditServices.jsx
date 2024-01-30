import React from "react";

//css
import ESCss from'./Css/EditServices.module.css'


export default function EditServices(props) {
  return (
    <div className={ESCss.mDiv}>
         <p className={ESCss.editHead}>Edit</p>
         <p className={ESCss.subTitlePTag}>{props.label} :</p>
      <ul className={ESCss.listDiv}>
        <li className={ESCss.liBlock}>10 days return (Restrictions applied)</li>
        <li className={ESCss.liBlock}>Superfast delivery available</li>
        <li className={ESCss.liBlock}>Cash on delivery available</li>
      </ul>
    </div>
  );
}
