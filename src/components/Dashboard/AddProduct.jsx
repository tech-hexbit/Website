import { useContext, useState } from "react";

// components
import Header from "./MainParts/Header";
import UploadCsvPopup from "./AddProduct/UploadCsvPopup";
import FilteredCategory from "./AddProduct/FilteredCatergory";
//    RET-Files
import AddProdRET10 from "./AddProduct/Domin/AddProdRET10";
import AddProdRET12 from "./AddProduct/Domin/AddProdRET12";

// css
import ApCss from "./Css/AddProduct.module.css";

//store
import AuthContext from "../../store/auth-context";

export default function AddProduct() {
  const [domain, setDomain] = useState("");
  const [showPopup, setShowPopup] = useState(false);

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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                // class="lucide lucide-chevron-left"
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
          <p className={ApCss.domainPtag}>{domain}</p>

          {domain === "ONDC:RET10" && <AddProdRET10 domain={domain} />}

          {domain === "ONDC:RET11" && (
            <div className="loadCenterDiv">
              <p>We currently Do Not Support ONDC:RET11 - Food & Beverage</p>
            </div>
          )}

          {domain === "ONDC:RET12" && <AddProdRET12 domain={domain} />}

          {domain === "ONDC:RET13" && (
            <div className="loadCenterDiv">
              <p>
                We currently Do Not Support ONDC:RET13 - Beauty and Personal
                Care
              </p>
            </div>
          )}

          {domain === "ONDC:RET14" && (
            <div className="loadCenterDiv">
              <p> We currently Do Not Support ONDC:RET14 - Electronics </p>
            </div>
          )}

          {domain === "ONDC:RET15" && (
            <div className="loadCenterDiv">
              <p> We currently Do Not Support ONDC:RET15 - Appliances </p>
            </div>
          )}

          {domain === "ONDC:RET16" && (
            <div className="loadCenterDiv">
              <p>
                We currently Do Not Support ONDC:RET16 - Home & Decor & Kitchen
              </p>
            </div>
          )}

          {domain === "ONDC:RET17" && (
            <div className="loadCenterDiv">
              <p> We currently Do Not Support ONDC:RET17 - Toy & Games </p>
            </div>
          )}

          {domain === "ONDC:RET18" && (
            <div className="loadCenterDiv">
              <p>We currently Do Not Support ONDC:RET18 - Health & Wellness</p>
            </div>
          )}

          {domain === "ONDC:RET19" && (
            <div className="loadCenterDiv">
              <p> We currently Do Not Support ONDC:RET19 - Pharma </p>
            </div>
          )}

          {showPopup && <UploadCsvPopup setShowPopup={setShowPopup} />}
        </div>
      )}
    </>
  );
}
