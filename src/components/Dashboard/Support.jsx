import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// components
import QA from "./Support/QA";
import Box from "./Support/Box";

// state
import AuthContext from "./.././../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";

// css
import SupCss from "./Support/Css/Support.module.css";

export default function Support() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    loadData();

    window.scrollTo(0, 0);
  }, []);

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
    <div>
      <div className={SupCss.ask}>
        <p className={SupCss.FAQsPTag}>FAQs</p>
        <h1 className={SupCss.AskPTag}>Ask us anything</h1>
        <p className={SupCss.HaveanyquestionsPTag}>
          Have any questions? We're here to assist you.
        </p>

        <input
          type="text"
          placeholder="Search here"
          value={searchValue}
          className={SupCss.search}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>

      {/* boxespart */}
      <div className={SupCss.boxes}>
        <Box title="Getting Started" color="#dff1ff" />
        <Box title="How to Register" color="#e8ffeb" />
        <Box title="Payment Method" color="#ffecef" />
        <Box title="ONDC" color="#ffe5fc" />
        <Box title="Packaging" color="#e9e9e9" />
        <Box title="GST & Billing" color="#fbffdc" />
      </div>

      {/* questions part */}
      {load ? (
        <div className="loadCenterDiv">
          <Load />
        </div>
      ) : (
        <QA data={data} searchValue={searchValue} />
      )}

      <div className={SupCss.getintouch}>
        <div>
          <h4>Still have questions?</h4>
          <p>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>

        {/* Btn */}
        <button className={SupCss.getintouchBTN}>
          <Link to="/me/help/desk" className={SupCss.getintouchBTN}>
            Get in touch
          </Link>
        </button>
      </div>
    </div>
  );
}
