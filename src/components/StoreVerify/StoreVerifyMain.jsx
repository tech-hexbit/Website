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
import FileInput from "./FileInput";
import BankFields from "./BankFields";
import Ondc_Details from "./OndcField";
import TimingField from "./TimingField";
import PincodeField from "./PincodeField";
import VerifiedFields from "./VerifiedFields";

const StoreVerifyMain = (props) => {
  const [load, setLoad] = useState(false);
  const [disable, setDisable] = useState(false);
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

  const fileInp_id = useRef(null);
  const fileInp_cheque = useRef(null);
  const fileInp_address = useRef(null);

  const authCtx = useContext(AuthContext);

  const redirect = useNavigate();

  const successCallback = (position) => {
    setData({
      ...showData,
      gps: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
    });
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
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
    } else if (!verifyPin) {
      props.setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Invalid pincode",
        val: true,
      });
      window.scrollTo(0, 0);
    } else {
      try {
        let data = {
          gps: showData.gps,
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

  const handleImageCheque = (e) => {
    setImages({ ...images, imageUploadCheque: e.target.files[0] });
  };

  const handleImageAddress = (e) => {
    setImages({ ...images, imageUploadAddress: e.target.files[0] });
  };

  const handleImageID = (e) => {
    setImages({ ...images, imageUploadID: e.target.files[0] });
  };
  return (
    <>
      <Heading />
      <div className={SvCss.sub_headline}>
        Please allow us 2-3 business days to review your KYC and approve your
        account.
      </div>
      <div className={SvCss.progress_bar}>ICONS</div>
      <TextInput
        type="text"
        Label="First Name"
        showData={showData}
        setData={setData}
        field="FirstName"
        placeholder="john"
      />{" "}
      <TextInput
        type="text"
        Label="Last Name"
        showData={showData}
        setData={setData}
        field="LastName"
        placeholder="david"
      />{" "}
      <TextInput
        type="text"
        Label="Legal Name"
        showData={showData}
        setData={setData}
        field="LegalName"
        placeholder="john david"
      />
      <TextInput
        type="email"
        Label="Email ID"
        showData={showData}
        setData={setData}
        field="EmailID"
        placeholder="Enter your email"
      />{" "}
      <TextInput
        type="date"
        Label="DOB"
        showData={showData}
        setData={setData}
        field="DOB"
      />
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
      <VerifiedFields
        label="City"
        disable={disable}
        type="text"
        name="City"
        showData={showData}
        setData={setData}
        placeholder="Your City"
        verifyPin={verifyPin}
      />
      <VerifiedFields
        label="State"
        disable={disable}
        type="text"
        name="State"
        showData={showData}
        setData={setData}
        placeholder="Your State"
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
      <BankFields setData={setData} showData={showData} />
      <TextInput
        type="number"
        Label="GST No."
        showData={showData}
        setData={setData}
        field="GstNo"
        placeholder="Enter GST number"
      />
      <TextInput
        type="number"
        Label="FSSAI Licence NO"
        showData={showData}
        setData={setData}
        field="FssaiLicence"
        placeholder="14-digit FSSAI Licence Number"
      />
      <TextInput
        type="number"
        Label="PAN NO."
        showData={showData}
        setData={setData}
        field="PanNo"
        placeholder="10-digit PAN Number"
      />
      <FileInput
        label="Upload Cancelled Cheque"
        placeholder="Cheque "
        handleImage={handleImageCheque}
        fileInp={fileInp_cheque}
        image={images.imageUploadCheque}
        handleClicksValue="cheque"
      />
      <FileInput
        label="Address Proof (GSTIN)"
        placeholder="Address "
        handleImage={handleImageAddress}
        fileInp={fileInp_address}
        image={images.imageUploadAddress}
        handleClicksValue="address"
      />
      <FileInput
        label="ID Proof (PAN CARD)"
        placeholder="PAN Card "
        handleImage={handleImageID}
        fileInp={fileInp_id}
        image={images.imageUploadID}
        handleClicksValue="id"
      />
      <div className={SvCss.inpDiv}>
        <div className={SvCss.input_label}>LOCATION AVAILABILITY MODE</div>
        <select name="languages" id="lang">
          <option value="select">Select Availability</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <Ondc_Details setData={setData} showData={showData} />
      <TimingField showData={showData} setData={setData} />
      <div className={SvCss.submit_div}>
        <button className={SvCss.submitBtn} onClick={onSubmit}>
          {load ? <Load /> : "SUBMIT KYC"}
        </button>
      </div>
    </>
  );
};

export default StoreVerifyMain;
