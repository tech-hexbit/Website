import React, { useEffect, useState } from "react";

// components
import Form from "./AddProduct/Form";

// MicroInteraction
import { Alert } from "../../MicroInteraction/Alert";

// css
import ApCss from "./Css/AddProduct.module.css";
import UploadCsvPopup from "./AddProduct/UploadCsvPopup";

export default function AddProduct() {
  const [showPopup, setShowPopup] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });
  useEffect(() => {
    setTimeout(() => {
      setError({
        mainColor: "",
        secondaryColor: "",
        symbol: "",
        title: "",
        text: "",
        val: false,
      });
    }, 10000);
  }, [variants]);
  return (
    <>
      <div className={ApCss.mDiv}>
        <div className={ApCss.headDiv}>
          <p className={ApCss.AddHPTag}>Add Product</p>
          <div className={ApCss.addCsv}>
            <button onClick={() => setShowPopup(true)}>+ Add bulk</button>
          </div>
        </div>
        <Form />
        {showPopup && (
          <UploadCsvPopup setShowPopup={setShowPopup} setError={setError} />
        )}
      </div>
      <Alert variant={variants} val={setError} />
    </>
  );
}
