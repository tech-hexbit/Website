import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// axios
import axios from "axios";

// state
import AuthContext from "../store/auth-context";

// MicroInteraction
import Load from "../MicroInteraction/Load";
import { Alert } from "../MicroInteraction/Alert";

// css
import SvCss from "./Css/StoreVerify.module.css";

import TextInput from "../components/StoreVerify/TextInput";
import BankFields from "../components/StoreVerify/BankFields";
import Ondc_Details from "../components/StoreVerify/OndcField";
import FileInput from "../components/StoreVerify/FileInput";
import Heading from "../components/StoreVerify/Heading";
import TimingField from "../components/StoreVerify/TimingField";
import VerifiedFields from "../components/StoreVerify/VerifiedFields";
import PincodeField from "../components/StoreVerify/PincodeField";
export default function StoreVerify() {
  const fileInp_cheque = useRef(null);
  const fileInp_address = useRef(null);
  const fileInp_id = useRef(null);
  const [load, setLoad] = useState(false);
  const [verifyPin, setVerify] = useState(false);
  const [disable, setDisable] = useState(false);
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
  });
  const [images, setImages] = useState({
    imageUploadCheque: "",
    imageUploadAddress: "",
    imageUploadID: "",
  });

  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);
  const redirect = useNavigate();

  const handleImageCheque = (e) => {
    setImages({ ...images, imageUploadCheque: e.target.files[0] });
  };
  const handleImageAddress = (e) => {
    setImages({ ...images, imageUploadAddress: e.target.files[0] });
  };
  const handleImageID = (e) => {
    setImages({ ...images, imageUploadID: e.target.files[0] });
  };
  const onSubmit = async () => {
    setLoad(true);

    if (
      showData.StartTime == "" ||
      showData.EndTime == "" ||
      showData.phone == "" ||
      showData.email == "" ||
      showData.holidays == "" ||
      showData.percentage == "" ||
      showData.radiusValue == ""
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
    } else {
      try {
        let data = {
          gps: showData.gps,
          days: showData.days,
          times: [],
          phone: showData.phone,
          email: showData.email,
          holidays: [],
          percentage: showData.percentage,
          radiusValue: showData.radiusValue,
          amountValue: showData.amountValue,
        };

        data.times.push(String(showData.StartTime));
        data.times.push(String(showData.EndTime));
        data.holidays = showData.holidays.split(",");

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

  return (
    <>
      <div className={SvCss.l_div}>
        <div className={SvCss.box_div}>
          <Heading />
          <div className={SvCss.sub_headline}>
            Please allow us 2-3 business days to review your KYC and approve
            your account.
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
          <BankFields
            text="Bank Details"
            label1="A/c Holder Name."
            type1="text"
            placeholder1="Account Holder Name"
            label2="Account No."
            type2="number"
            placeholder2="Enter Account Number"
            label3="IFSC CODE"
            type3="text"
            placeholder3="11-character IFSC Code"
            label4="Bank Name"
            type4="text"
            placeholder4="Name of Bank"
            label5="Branch Name"
            type5="text"
            placeholder5="Account Branch Name"
          />
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
          <Ondc_Details
            text="ONDC DETAILS"
            label1="Time to ship"
            placeholder_label1="Select Shipping Time"
            label2="Cancellable"
            placeholder_label2="Choose option"
            label2_val1="True"
            label2_val2="False"
            label3="Returnable"
            placeholder_label3="Choose option"
            label3_val1="True"
            label3_val2="False"
            label4="Contact Details For Consumer Care"
            placeholder_label4="Consumer Care Contact Details"
            setData={setData}
            showData={showData}
          />
          <TimingField showData={showData} setData={setData} />
          <div className={SvCss.submit_div}>
            <button className={SvCss.submitBtn} onClick={onSubmit}>
              {load ? <Load /> : "SUBMIT KYC"}
            </button>
          </div>
        </div>
      </div>
      <Alert variant={variants} val={setError} />
    </>
  );
}
