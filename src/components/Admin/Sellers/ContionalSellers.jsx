import React, { useState, useEffect, useContext } from "react";

// state
import AuthContext from "./.././../../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// css
import SelCss from "./../Css/Sellers.module.css";

export default function ContionalSellers(props) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      let body = { state: props.state };

      const response = await axios.post(`/api/website/admin/usersList`, body, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setData(response.data.sellerList);

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
    <div className={SelCss.mDiv}>
      {load ? (
        <div className="loadCenterDiv">
          <Load />
        </div>
      ) : (
        <>
          {data ? (
            <>
              {data.map((val, key) => {
                return (
                  <div key={key} className={SelCss.mapMDiv}>
                    {" "}
                    <div className={SelCss.conDelT}>
                      <p>{val.BusinessName}</p>
                      <p>
                        {val.accountVerified ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-badge-check"
                            style={{ color: "#0132bf" }}
                          >
                            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-badge-info"
                            style={{ color: "#800000" }}
                          >
                            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                            <line x1="12" x2="12" y1="16" y2="12" />
                            <line x1="12" x2="12.01" y1="8" y2="8" />
                          </svg>
                        )}
                      </p>
                    </div>
                    <div className={SelCss.conDel}>
                      <p>{val.Phone}</p>
                      <p>{val.Email}</p>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}
