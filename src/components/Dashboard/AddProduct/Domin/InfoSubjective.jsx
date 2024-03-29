import React from "react";
import PropTypes from "prop-types";

//component
import InpTp1 from "./Input/InpTp1";
import TxtArea from "./Input/TxtArea";

// css
import PrCss from "./Css/Lable.module.css";

export default function InfoSubjective({ setData, showData }) {
  return (
    <>
      <p className={PrCss.AboutYou}>Subjective Info</p>

      {/* Nutritional Info */}
      <TxtArea
        Label="Nutritional Info"
        showData={showData}
        setData={setData}
        field="nutritional_info"
        placeholder="Energy(KCal)-(per 100kg) 420, (per serving 50g)250; Protein(g)-(per 100kg) 12, (per serving 50g) 6"
      />
    </>
  );
}

InfoSubjective.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
