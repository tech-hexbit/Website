import React, { useState, useEffect } from "react";

// MicroInteraction
import Load from "../../MicroInteraction/LoadBlack";
import { Alert } from "./../../MicroInteraction/Alert";

// axios
import axios from "axios";

// components
import CatBox from "./CatBox";

// css
import FCss from "./Css/Form.module.css";

export default function Form3(props) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const nextFN = async () => {
    console.log(input);

    // if (dataArray.length === 0) {
    //   setError({
    //     mainColor: "#FFC0CB",
    //     secondaryColor: "#FF69B4",
    //     symbol: "pets",
    //     title: "Check it out",
    //     text: "Please Select atleast 1 feild",
    //     val: true,
    //   });
    // } else {
    //   props.register();
    // }
  };

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(`/api/common/Global/CategoryList`);

      if (response.data.success) {
        setLoad(false);

        setData(response.data.CategoryList);
      } else {
        setLoad(false);

        console.log("Error");
      }
    } catch (e) {
      setLoad(false);

      console.log(e);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
        val: true,
      });
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className={FCss.mainDiv}>
        <div className={FCss.top}>
          <div className={FCss.head}>
            Get your Business <span>Started</span>
          </div>
          <div className={FCss.subHead}>
            Select your store category / Categories as per your store inventory.
          </div>
        </div>

        <div className={FCss.form3Cat}>
          {load ? (
            <div className="loadCenterDiv">
              <Load />
            </div>
          ) : (
            <>
              {data.length > 0 ? (
                <>
                  {data.map((val, key) => {
                    return (
                      <div key={key}>
                        <CatBox
                          val={val}
                          input={props.input}
                          setInput={props.setInput}
                        />
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="loadCenterDiv">
                  Error In fetching Category list
                </div>
              )}
            </>
          )}

          <div className={FCss.button} id={FCss.btn3}>
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

      <Alert variant={variants} val={setError} />
    </>
  );
}
