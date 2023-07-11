import React, { useState, useEffect } from "react";

// Css
import FCss from "./Css/Founders.module.css";

export default function ImgCard(props) {
  const [show, set] = useState(false);

  const pop = async () => {
    set(true);
  };

  const close = async () => {
    set(false);
  };

  useEffect(() => {
    console.log(show);
  }, [show]);
  return (
    <>
      <div className={FCss.fmDIv} onClick={pop}>
        <img src={props.img} alt="" className={FCss.imgTag} />
        <p className={FCss.name}>{props.name}</p>
      </div>

      {/* pop up */}
      {show ? (
        <>
          <div className={FCss.popmDiv}>
            <div className={FCss.popChildDiv}>
              <div className={FCss.parDiv}>
                <img src={props.img} alt="" className={FCss.imgTagpop} />
                <div className={FCss.name}>{props.name}</div>
              </div>
              <div className={FCss.des}>{props.des}cff</div>
              <div onClick={close} className={FCss.close}>
                X
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
