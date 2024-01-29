import React, { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// css
import SvCss from "../../Pages/Css/StoreVerify.module.css";

// MicroInteraction
import Load from "../../MicroInteraction/Load";

// store
import AuthContext from "../../store/auth-context";

// axios
import axios from "axios";

// components
import Heading from "./Heading";
import TextInput from "./TextInput";
import { GrpTextInput, FssaiField } from "./TextInput";
import FileInput from "./FileInput";
import BankFields from "./BankFields";
import Ondc_Details from "./OndcField";
import TimingField from "./TimingField";
import PincodeField from "./PincodeField";
import GrpVerifiedFields from "./VerifiedFields";
import SelectInput from "./SelectInput";
import GeoLocation from "./GeoLocation";
import { VerifiedPan, VerifiedGstin } from "./VerifiedPanGst";

const StoreVerifyMain = (props) => {
  // states
  const [load, setLoad] = useState(false);
  const [disable, setDisable] = useState({
    Pincode: false,
    Pan: false,
    Gstin: false,
    Bank: false,
  });
  const [verifyPin, setVerify] = useState(false);
  const [showData, setData] = useState({
    FirstName: "",
    LastName: "",
    EmailID: "",
    Password: "",
    DOB: "",
    LegalName: "",
    Description: "",
    Address: "",
    City: "",
    State: "",
    Pincode: "",
    StoreLocation: "",
    AcHolderName: "",
    AccountNo: "",
    IfscCode: "",
    BankName: "",
    BranchName: "",
    GstNo: "",
    Gstin: "",
    FssaiLicence: "",
    PanNo: "",
    LocationAvailabilityMode: "",
    TimeToShip: "",
    Cancellable: "",
    Returnable: "",
    ContactDetailsForConsumerCare: "",
    DefaultCategoryId: "",
    StoreTimingStart: "",
    StoreTimingEnd: "",
    gps: "",
  });
  const [images, setImages] = useState({
    imageUploadCheque: "",
    imageUploadAddress: "",
    imageUploadID: "",
  });

  const authCtx = useContext(AuthContext);
  const redirect = useNavigate();
  // getLocation(showData, setData);
  const onSubmit = async () => {
    setLoad(true);

    if (
      showData.StoreTimingStart == "" ||
      showData.StoreTimingEnd == "" ||
      showData.FirstName == "" ||
      showData.LastName == "" ||
      showData.EmailID == "" ||
      showData.LegalName == "" ||
      showData.Address == "" ||
      showData.City == "" ||
      showData.State == "" ||
      showData.Pincode == "" ||
      showData.StoreLocation == "" ||
      showData.AcHolderName == "" ||
      showData.AccountNo == "" ||
      showData.IfscCode == "" ||
      showData.BankName == "" ||
      showData.BranchName == "" ||
      showData.Gstin == "" ||
      showData.GstNo == "" ||
      showData.FssaiLicence == "" ||
      showData.PanNo == "" ||
      showData.Cancellable == "" ||
      showData.Returnable == "" ||
      showData.imageUploadCheque == "" ||
      showData.imageUploadAddress == "" ||
      showData.imageUploadID == ""
    ) {
      setLoad(false);
      props.setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
        val: true,
      });
    } else if (!verifyPin || !disable.Bank || !disable.Gstin || disable.Pan) {
      props.setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: !verifyPin
          ? "Invalid pincode"
          : !disable.Bank
          ? "Invalid Bank Details"
          : !disable.Gstin
          ? "Invalid GSTIN"
          : "Invalid Pan",
        val: true,
      });
      window.scrollTo(0, 0);
    } else {
      try {
        let data = {
          gps: showData.gps,
          days: showData.days,
          times: [],
          phone: showData.phone,
          email: showData.email,
        };
        data.times.push(String(showData.StoreTimingStart));
        data.times.push(String(showData.StoreTimingEnd));
        const response = await axios.post(
          "/api/common/Store/CreateStore",
          data,
          {
            headers: { Authorization: `${authCtx.token}` },
          }
        );
        if (response.data.success) {
          props.setError({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: response.data.msg,
            val: true,
          });
          await authCtx.updateStore(response.data.upData[0].Store);
          redirect("/me");
          setLoad(false);
        } else {
          setLoad(false);
          console.log(e);
        }
      } catch (e) {
        setLoad(false);
        props.setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An unexpected error occurred",
          val: true,
        });
      }
    }
  };

  return (
    <>
      <Heading />
      <div className={SvCss.subHeadline}>
        Please allow us 2-3 business days to review your KYC and approve your
        account.
      </div>
      <div className={SvCss.progressBar}>ICONS</div>
      <GrpTextInput showData={showData} setData={setData} />
      <PincodeField
        showData={showData}
        setData={setData}
        verifyPin={verifyPin}
        disable={disable}
        setDisable={setDisable}
        setVerify={setVerify}
        setError={props.setError}
      />
      <TextInput
        type="text"
        Label="Address"
        showData={showData}
        setData={setData}
        field="Address"
        placeholder="Your address"
      />
      <GrpVerifiedFields
        disable={disable}
        showData={showData}
        setData={setData}
        verifyPin={verifyPin}
      />
      <TextInput
        type="number"
        Label="Store Location"
        showData={showData}
        setData={setData}
        field="StoreLocation"
        placeholder="Enter Store Location"
      />
      <BankFields
        setData={setData}
        showData={showData}
        disable={disable}
        setDisable={setDisable}
        setError={props.setError}
      />
      <VerifiedGstin
        showData={showData}
        setData={setData}
        disable={disable}
        setDisable={setDisable}
        setError={props.setError}
      />
      <VerifiedPan
        showData={showData}
        setData={setData}
        disable={disable}
        setDisable={setDisable}
        setError={props.setError}
      />
      <FssaiField showData={showData} setData={setData} />
      <FileInput images={images} setImages={setImages} />
      <SelectInput showData={showData} setData={setData} />
      <Ondc_Details setData={setData} showData={showData} />
      <TimingField showData={showData} setData={setData} />
      <div className={SvCss.submitDiv}>
        <button className={SvCss.submitBtn} onClick={onSubmit}>
          {load ? <Load /> : "SUBMIT KYC"}
        </button>
      </div>
    </>
  );
};

export default StoreVerifyMain;
