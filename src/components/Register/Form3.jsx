import React, { useState, useEffect } from "react";

// MicroInteraction
import Load from "../../MicroInteraction/Load";
import { Alert } from "./../../MicroInteraction/Alert";

// components
import CatBox from "./CatBox";

// css
import FCss from "./Css/Form.module.css";

export default function Form3(props) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const nextFN = async () => {};

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(`/api/common/Global/CategoryList`);

      if (response.data.success) {
        setres(response.data.OrderDetail);
      } else {
        console.log("Error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className={FCss.mainDiv}>
      <div className={FCss.top}>
        <CatBox />
        <div className={FCss.button}>
          <div></div>
          <div>
            <button onClick={nextFN}>
              {props.button}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="10"
                viewBox="0 0 21 10"
                fill="none"
              >
                <path
                  d="M1.81791 5.97787L16.9094 5.9877L14.0445 8.32675C13.577 8.71004 13.577 9.32919 14.0445 9.71252C14.512 10.0958 15.2792 10.0958 15.7466 9.71252L20.6493 5.69288C21.1168 5.30958 21.1168 4.69044 20.6493 4.30711L15.7466 0.287469C15.2791 -0.095823 14.5119 -0.095823 14.0445 0.287469C13.577 0.670761 13.577 1.28991 14.0445 1.67324L16.9094 4.02217L1.81791 4.01234C1.15862 4.01234 0.619141 4.45461 0.619141 4.9952C0.619141 5.53578 1.15857 5.97805 1.81791 5.97805V5.97787Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
