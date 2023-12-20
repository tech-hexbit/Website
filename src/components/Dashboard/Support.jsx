import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// components
import QA from "./Support/QA";

// state
import AuthContext from "./.././../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";

// css
import SupCss from "./Support/Css/Support.module.css";

export default function Support() {
  const [searchValue, setSearchValue] = useState();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    loadData();
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
      <h3>Support</h3>
      <div className={SupCss.ask}>
        <p className={SupCss.FAQsPTag}>FAQs</p>
        <h1 style={{ color: "#4A246F" }}>Ask us anything</h1>
        <p style={{ color: "#53686A" }}>
          Have any questions? We're here to assist you.
        </p>

        <input
          type="text"
          placeholder="Search here"
          value={searchValue}
          className={SupCss.search}
        ></input>
      </div>
      {/* boxespart */}
      <div className={SupCss.boxes}>
        <div
          style={{
            backgroundColor: "#DFF1FF",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
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
            class="lucide lucide-bell"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" className={SupCss.icon} />
          </svg>
          <p style={{ color: "#616161" }}>Questions about</p>
          <p style={{ fontWeight: "bold" }}>Getting Started</p>
        </div>
        <div
          style={{
            backgroundColor: "#E8FFEB",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
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
            class="lucide lucide-bell"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" className={SupCss.icon} />
          </svg>
          <p style={{ color: "#616161" }}>Questions about</p>
          <p style={{ fontWeight: "bold" }}>How to Register</p>
        </div>
        <div
          style={{
            backgroundColor: "#FFECEF",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
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
            class="lucide lucide-bell"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" className={SupCss.icon} />
          </svg>
          <p style={{ color: "#616161" }}>Questions about</p>
          <p style={{ fontWeight: "bold" }}>Payment Method</p>
        </div>
        <div
          style={{
            backgroundColor: "#FFE5FC",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
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
            class="lucide lucide-bell"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" className={SupCss.icon} />
          </svg>
          <p style={{ color: "#616161" }}>Questions about</p>
          <p style={{ fontWeight: "bold" }}>ONDC</p>
        </div>
        <div
          style={{
            backgroundColor: "#E9E9E9",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
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
            class="lucide lucide-bell"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" className={SupCss.icon} />
          </svg>
          <p style={{ color: "#616161" }}>Questions about</p>
          <p style={{ fontWeight: "bold" }}>Packaging</p>
        </div>
        <div
          style={{
            backgroundColor: "#FBFFDC",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
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
            class="lucide lucide-bell"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" className={SupCss.icon} />
          </svg>
          <p style={{ color: "#616161" }}>Questions about</p>
          <p style={{ fontWeight: "bold" }}>GST & Billing</p>
        </div>
      </div>
      {/* questions part */}
      <div className={SupCss.quesboxes}>
        {data.map((d) => {
          return (
            <div className={SupCss.quepart}>
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
                class="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <h4 style={{ color: "#53686A" }}>{d.question}</h4>
              <p>{d.answer}</p>
            </div>
          );
        })}
      </div>
      <div className={SupCss.getintouch}>
        <div>
          <h4>Still have questions?</h4>
          <p>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <button
          style={{
            marginLeft: "auto",
            backgroundColor: "#4A246F",
            color: "white",
            borderRadius: "5px",
            padding: "6px",
            cursor: "pointer",
            border: "none",
          }}
        >
          Get in touch
        </button>
      </div>
    </div>
  );
}
