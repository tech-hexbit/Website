import React, { useContext, useEffect, useState } from "react";

// components
import Form from "./AddProduct/Form";
import Header from "./MainParts/Header";
import UploadCsvPopup from "./AddProduct/UploadCsvPopup";
import FilteredCategory from "./AddProduct/FilteredCatergory";

// MicroInteraction
import { Alert } from "../../MicroInteraction/Alert";

// css
import ApCss from "./Css/AddProduct.module.css";

//store
import AuthContext from "../../store/auth-context";

export default function AddProduct() {
  const authCtx = useContext(AuthContext);

  const userCategory = authCtx.user.category;

  const [showCategory, setCategory] = useState({
    state: userCategory.length > 0,
    value: authCtx.user.category,
  });

  const handleCategoryClick = (category) => {
    console.log("Category clicked");

    setCategory({
      ...showCategory,
      state: false,
    });
  };

  useEffect(() => {}, [showCategory]);

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
      {showCategory.state ? (
        <FilteredCategory
          selectedCategories={showCategory.value}
          onCategoryClick={handleCategoryClick}
        />
      ) : (
        <div className={ApCss.mDiv}>
          <div className={ApCss.headDiv}>
            <Header name="Add Product" />
            <div className={ApCss.addCsv}>
              <button onClick={() => setShowPopup(true)}>
                + <span className={ApCss.hideTxt}>Add bulk</span>
              </button>
            </div>
          </div>

          <Form />

          {showPopup && (
            <UploadCsvPopup setShowPopup={setShowPopup} setError={setError} />
          )}
        </div>
      )}

      <Alert variant={variants} val={setError} />
    </>
  );
}
