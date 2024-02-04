import React, { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// css
import SvCss from "./Css/StoreVerifyMain.module.css";

// MicroInteraction
import Load from "./../../MicroInteraction/Load";
import { Alert } from "./../../MicroInteraction/Alert";

// store
import AuthContext from "../../store/auth-context";

// axios
import axios from "axios";

// components
import Heading from "./Heading";
import DaysField from "./DaysField";
import FileInput from "./FileInput";
import OndcField from "./OndcField";
import BankFields from "./BankFields";
import TimingField from "./TimingField";
import SelectInput from "./SelectInput";
import TextInput from "./TextInputs/TextInput";
import FssaiField from "./TextInputs/FssaiField";
import GrpTextInput from "./TextInputs/GrpTextInput";
import PincodeField from "./VerifiedField/PincodeField";
import VerifiedPanGst from "./VerifiedField/VerifiedPanGst";
import GrpVerifiedFields from "./VerifiedField/VerifiedFields";

const StoreVerifyMain = () => {
  const [load, setLoad] = useState(false);
  const [verifyPin, setVerify] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });
  const [disable, setDisable] = useState({
    Pincode: false,
    Pan: false,
    Gstin: false,
    Bank: false,
  });
  const [showData, setData] = useState({
    FirstName: "",
    LastName: "",
    EmailID: "",
    Password: "",
    DOB: "",
    LegalName: "",
    Address: "",
    City: "",
    State: "",
    Pincode: "",
    StoreLocation: "",
    AcHolderName: "",
    AccountNo: "",
    IfscCode: "",
    BankName: "",
    BankCity: "",
    BranchName: "",
    Gstin: "",
    FssaiLicence: "",
    PanNo: "",
    LocationAvailabilityMode: "",
    TimeToShip: "",
    Cancellable: false,
    Returnable: false,
    ContactDetails: "",
    SupportEmail: "",
    DefaultCategoryId: "",
    Days: "",
    times: [],
    Radius: "",
    gps: "",
    DescEnterprise: "",
  });

  const authCtx = useContext(AuthContext);

  const redirect = useNavigate();

  const onSubmit = async () => {
    setLoad(true);

    if (
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
      showData.FssaiLicence == "" ||
      showData.PanNo == ""
    ) {
      setLoad(false);
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
        val: true,
      });
    } else if (!verifyPin || !disable.Bank || !disable.Gstin || !disable.Pan) {
      console.log(verifyPin, `inverse ${!verifyPin}`);
      setError({
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
    } else {
      try {
        let data = {
          gps: showData.gps,
          days: showData.days,
          times: [],
          phone: showData.phone,
          email: showData.email,
        };
        data = showData;

        const response = await axios.post(
          "/api/common/Store/CreateStore",
          data,
          {
            headers: { Authorization: `${authCtx.token}` },
          }
        );

        if (response.data.success) {
          setError({
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
        setError({
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

  function getLocation(showData, setData) {
    const successCallback = (position) => {
      setData({
        ...showData,
        gps: `${position.coords.latitude},${position.coords.longitude}`,
      });
    };

    const errorCallback = (error) => {
      console.log(error);
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }
  if (!showData.gps) {
    getLocation(showData, setData);
  }
  useEffect(() => {
    console.table(showData);
  }, [showData]);

  return (
    <>
      <Heading load={load} onSubmit={onSubmit} />
      <div className={SvCss.subHeadline}>
        Please allow us 2-3 business days to review your KYC and approve your
        account.
      </div>

      <GrpTextInput showData={showData} setData={setData} />
      <PincodeField
        showData={showData}
        setData={setData}
        verifyPin={verifyPin}
        disable={disable}
        setDisable={setDisable}
        setVerify={setVerify}
        setError={setError}
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
        type="text"
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
        setError={setError}
      />
      <VerifiedPanGst
        showData={showData}
        setData={setData}
        disable={disable}
        setDisable={setDisable}
        setError={setError}
      />
      <FssaiField showData={showData} setData={setData} />
      <FileInput />
      <SelectInput showData={showData} setData={setData} />
      <OndcField setData={setData} showData={showData} />
      <TimingField showData={showData} setData={setData} />
      <DaysField showData={showData} setData={setData} />
      <div className={SvCss.submitDiv}>
        <button className={SvCss.submitBtn} onClick={onSubmit}>
          {load ? <Load /> : "SUBMIT KYC"}
        </button>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
};

export default StoreVerifyMain;
