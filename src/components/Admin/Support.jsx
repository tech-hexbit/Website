import React, { useState, useEffect, useContext } from "react";

// components
import QA from "./QA";
import AddQuestiom from "./AddQuestiom";

// state
import AuthContext from "./.././../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";

// css
import SupCss from "./Css/Support.module.css";

export default function Support() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [showAdd, setAdd] = useState(false);
  const [showRef, setRef] = useState(false);
  const [showCurr, setCurr] = useState("Support");

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    loadData();
    setRef(false);
  }, [, showRef]);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(`/api/website/qna/get`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setData(response.data.qnaEntries);

        setLoad(false);
      } else {
        setLoad(false);

        console.log(e);
      }
    } catch (e) {
      setLoad(false);

      console.log(e);
    }
  };
  return (
    <>
      <div>
        <div className={SupCss.titleDiv}>
          <p
            id={showCurr === "Support" ? "Support" : "nonAc"}
            onClick={() => {
              setCurr("Support");
            }}
          >
            Support
          </p>
          <p
            id={showCurr === "Contacted" ? "Contacted" : "nonAc"}
            onClick={() => {
              setCurr("Contacted");
            }}
          >
            Contacted
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-plus"
            className={SupCss.plusIcon}
            onClick={() => {
              setAdd(true);
            }}
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </div>

        <div className={SupCss.qamDiv}>
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
                      <QA
                        key={key}
                        answer={val.answer}
                        question={val.question}
                      />
                    );
                  })}
                </>
              ) : (
                <>
                  <p id={SupCss.NoData}>No Data</p>
                </>
              )}
            </>
          )}
        </div>
      </div>

      <div className={showAdd ? "yesAdd" : "noAdd"}>
        <AddQuestiom setAdd={setAdd} setRef={setRef} />
      </div>
    </>
  );
}
