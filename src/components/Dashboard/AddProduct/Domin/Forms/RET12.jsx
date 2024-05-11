import React, { useState, useContext, useRef, useEffect } from "react";
import PropTypes from "prop-types";

//component
import ProdParticulars from "./../ProdParticulars";

// data
import inpData from "./../Json/Ret12.json";

// MicroInteraction
import Load from "./../../../../../MicroInteraction/Load";

// axios
import axios from "axios";

// state
import AuthContext from "../../../../../store/auth-context";

// css
import PrCss from "./../Css/Lable.module.css";

export default function RET12({ domain }) {
  const [load, setLoad] = useState(false);
  const [imageUpload, setImageUpload] = useState();
  const [multipleImageUpload, setMultipleImageUpload] = useState([]);

  const fileInp = useRef(null);

  const authCtx = useContext(AuthContext);

  const [data, setData] = useState({
    name: "",
    images: [],
    long_desc: "",
    short_desc: "",
    veg: "",
    non_veg: "",
    Discounts: "",
    brand_name: "",
    maximumCount: 0,
    maximum_value: 0,
    manufacturer_or_packer_name: "",
    tags: [],
    category_id: "",
    additives_info: "",
    month_year_of_manufacture_packing_import: "",
    net_quantity_or_measure_of_commodity_in_pkg: "",
    ondcOrgavailable_on_cod: "",
    ondcOrgreturn_window: "",
    ondcOrgseller_pickup_return: "",
    ondcOrgtime_to_ship: "",
    ondcOrgcancellable: "",
    ondcOrgreturnable: "",
    domain: "",
    manufacturer_or_packer_address: "",
    fulfillment_id: 1,
    nutritional_info: "",
    other_FSSAI_license_no: "",
    importer_FSSAI_license_no: "",
    brand_owner_FSSAI_license_no: "",
    ondcOrgcontact_details_consumer_care: "",
    common_or_generic_name_of_commodity: "",
    StoreID: authCtx.user.Store[0].StoreID._id,
  });

  useEffect(() => {
    if (domain !== "") {
      setData({
        ...data,
        domain,
      });
    }
  }, []);
  return (
    <>
      <ProdParticulars showData={data} setData={setData} />
    </>
  );
}

RET12.propTypes = {
  domain: PropTypes.string.isRequired,
};
