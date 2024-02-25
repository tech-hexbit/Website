import React, { useState, useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";
import { Alert } from "./../../../MicroInteraction/Alert";

// axios
import axios from "axios";

// state
import AuthContext from "../../../store/auth-context";

// css
import pt from "./Css/PaymentTable.module.css";

export default function UploadFile({
  setSel,
  val,
  setImageUpload,
  IDLocal,
  setID,
}) {
  const fileInp = useRef(null);

  const handleImage = (e, id) => {
    const selectedFiles = Array.from(e.target.files);
    setImageUpload((prevImages) => [...prevImages, ...selectedFiles]);

    setID((prevIDLocal) => [...prevIDLocal, id]);
  };

  const handleClick = (id) => {
    fileInp.current.click();
  };

  return (
    <>
      <input
        type="checkbox"
        className={pt.CheckBoxInp}
        style={{ display: IDLocal.includes(val._id) ? "block" : "none" }}
        onChange={(e) => {
          setSel((prevShowSel) => ({
            ...prevShowSel,
            total: e.target.checked
              ? prevShowSel.total + 1
              : prevShowSel.total - 1,
            amount: e.target.checked
              ? prevShowSel.amount + val.amount
              : prevShowSel.amount - val.amount,
            order: e.target.checked
              ? Array.isArray(prevShowSel.order)
                ? [...prevShowSel.order, val._id]
                : [val._id]
              : prevShowSel.order.filter((order) => order !== val._id),
          }));
        }}
      />

      <input
        type="file"
        name="file"
        onChange={(e) => {
          handleImage(e, val._id);
        }}
        style={{ display: "none" }}
        ref={fileInp}
      />

      <div
        style={{ display: IDLocal.includes(val._id) ? "none" : "block" }}
        onClick={() => {
          handleClick(val._id);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pt.lucide}
        >
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
          <path d="M12 12v9" />
          <path d="m16 16-4-4-4 4" />
        </svg>
      </div>
    </>
  );
}
