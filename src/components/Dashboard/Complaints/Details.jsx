import React, { useState, useEffect, useContext, useRef } from "react";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";
import { Alert } from "./../../../MicroInteraction/Alert";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// css
import DelCss from "./Css/Details.module.css";

export default function Details({
  selectedItem,
  closeOverlay,
  setLoadMain,
  loadMain,
}) {
  const [data, setData] = useState([]);
  const [dataItem, setDataItem] = useState([]);
  const [load, setLoad] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(
        `/api/website/Issue/get/list/full/${selectedItem[0]._id}`,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setLoad(false);

        console.log(response.data.issueList);
        console.log(response.data.itemsList);

        setData(response.data.issueList);
        setDataItem(response.data.itemsList);
      } else {
        setLoad(false);

        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An unexpected error occurred",
          val: true,
        });
      }
    } catch (error) {
      console.log(error);

      setLoad(false);

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
    if (selectedItem.length === 0) {
      return;
    }

    loadData();
  }, [, selectedItem]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {load ? (
        <div className="loadCenterDiv">
          <Load />
        </div>
      ) : (
        <>
          {data.length > 0 ? (
            <div>
              <div>
                Issue for <b>Item Mismatch</b>
              </div>

              {/* Items */}
              <div className={DelCss.itemDiv}>
                <p>
                  <b>Issue Item(s)</b>
                </p>

                <div className={DelCss.itemMapDiv}>
                  {dataItem.length > 0 ? (
                    <>
                      {dataItem.map((val, key) => {
                        console.log(val[0]);
                        return (
                          <div key={key} className={DelCss.mapItemMDiv}>
                            <div>
                              <img
                                src={val[0].descriptor.symbol}
                                alt="isssue_img"
                                className={DelCss.imgCl}
                              />
                            </div>
                            <div className={DelCss.textOverflow}>
                              {val[0].descriptor.name}
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <div className="loadCenterDiv">No Data to Show</div>
                  )}
                </div>
              </div>

              <div>
                <p>
                  <b>Summary</b>
                </p>

                <p>
                  <b>sd: </b>
                  {data[0].description.short_desc}
                </p>
              </div>
            </div>
          ) : (
            <div className="loadCenterDiv">No Data to Show</div>
          )}
        </>
      )}

      <Alert variant={variants} val={setError} />
    </>
  );
}
