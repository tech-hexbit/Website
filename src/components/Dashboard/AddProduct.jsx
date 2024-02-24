import React, { useContext, useEffect, useState } from "react";

// components
import Header from "./MainParts/Header";
import UploadCsvPopup from "./AddProduct/UploadCsvPopup";
import AddProdRET10 from "./AddProduct/Domin/AddProdRET10";
import FilteredCategory from "./AddProduct/FilteredCatergory";

// MicroInteraction
import { Alert } from "../../MicroInteraction/Alert";

// css
import ApCss from "./Css/AddProduct.module.css";

//store
import AuthContext from "../../store/auth-context";

export default function AddProduct() {
  const [domain, setDomain] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const userCategory = authCtx.user.category;

  const [showCategory, setCategory] = useState({
    state: userCategory.length > 0,
    value: authCtx.user.category,
  });

  const handleCategoryClick = (category) => {
    setDomain(category.code);

    setCategory({
      ...showCategory,
      state: false,
    });
  };

  const backBtn = async () => {
    setCategory({
      ...showCategory,
      state: !showCategory.state,
    });
  };

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
            <div className={ApCss.headDivCon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-left"
                className={ApCss.svgBtn}
                onClick={backBtn}
              >
                <path d="m15 18-6-6 6-6" />
              </svg>

              <Header name="Add Product" />
            </div>

            <div className={ApCss.addCsv}>
              <button onClick={() => setShowPopup(true)}>
                + <span className={ApCss.hideTxt}>Add bulk</span>
              </button>
            </div>
          </div>

          {domain === "ONDC:RET10" ? <AddProdRET10 domain={domain} /> : ""}
          {domain === "ONDC:RET11"
            ? "We currently Do Not Support ONDC:RET11 - Food & Beverage"
            : ""}
          {domain === "ONDC:RET12"
            ? "We currently Do Not Support ONDC:RET12 - Fashion"
            : ""}
          {domain === "ONDC:RET13"
            ? "We currently Do Not Support ONDC:RET13 - Beauty and Personal Care"
            : ""}
          {domain === "ONDC:RET14"
            ? "We currently Do Not Support ONDC:RET14 - Electronics"
            : ""}
          {domain === "ONDC:RET15"
            ? "We currently Do Not Support ONDC:RET15 - Appliances"
            : ""}
          {domain === "ONDC:RET16"
            ? "We currently Do Not Support ONDC:RET16 - Home & Decor & Kitchen"
            : ""}
          {domain === "ONDC:RET17"
            ? "We currently Do Not Support ONDC:RET17 - Toy & Games"
            : ""}
          {domain === "ONDC:RET18"
            ? "We currently Do Not Support ONDC:RET18 - Health & Wellness"
            : ""}
          {domain === "ONDC:RET19"
            ? "We currently Do Not Support ONDC:RET19 - Pharma"
            : ""}

          {showPopup && (
            <UploadCsvPopup setShowPopup={setShowPopup} setError={setError} />
          )}
        </div>
      )}

      <Alert variant={variants} val={setError} />
    </>
  );
}
