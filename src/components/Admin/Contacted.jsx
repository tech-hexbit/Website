import React, { useState, useEffect, useContext } from "react";

// state
import AuthContext from "./.././../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";

// css
import CCss from "./Css/Contacted.module.css";

export default function Contacted() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(`/api/website/ContactUs/get`, {
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

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className={CCss.qamDiv}>
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
                  <div className={CCss.mapMDiv} key={key}>
                    <div className={CCss.titleDiv}>
                      <div className={CCss.titleNameDiv}>
                        <div>{val.name}</div>
                        <div>{val.email}</div>
                      </div>

                      <div className={CCss.titleCompanyNameDiv}>
                        {val.CompanyName}
                      </div>
                    </div>

                    <div className={CCss.submainDiv}>
                      <div className={CCss.submainDivMain}>
                        Subject - <b>{val.subject}</b>
                      </div>
                      <div>{val.message}</div>
                    </div>

                    <div className={CCss.datetimeDiv}>
                      <div>{val.when.date}</div>
                      <div>{val.when.time}</div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <p id={CCss.NoData}>No Data</p>
            </>
          )}
        </>
      )}
    </div>
  );
}
