import React, { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

// components
import Bank from "./../components/StoreDetails/Bank";
import Header from "./../components/StoreDetails/Header";
import GstPan from "./../components/StoreDetails/GstPan";
import Address from "./../components/StoreDetails/Address";
import UploadFiles from "./../components/StoreDetails/UploadFiles";
import Particulars from "./../components/StoreDetails/Particulars";
import StoreDetails from "./../components/StoreDetails/StoreDetails";

// MicroInteraction
import Load from "../MicroInteraction/Load";
import { Alert } from "./../MicroInteraction/Alert";

// store
import AuthContext from "./../store/auth-context";

// css
import SvCss from "./Css/StoreVerify.module.css";

export default function StoreVerify() {
  const [load, setLoad] = useState(false);
  const [showData, setData] = useState({
    DOB: "",
    City: "",
    cod: "",
    Days: "",
    State: "",
    Gstin: "",
    PanNo: "",
    radius: "",
    EmailID: "",
    Pincode: "",
    Street: "",
    Building: "",
    Address: "",
    IfscCode: "",
    LastName: "",
    BankName: "",
    FirstName: "",
    LegalName: "",
    AccountNo: "",
    BranchName: "",
    Percentage: "",
    TimeToShip: "",
    Returnable: "",
    Description: "",
    LongDes: "",
    Cancellable: "",
    amountValue: "",
    AcHolderName: "",
    FssaiLicence: "",
    returnWindow: "",
    PickupReturn: "",
    SupportEmail: "",
    StoreLocation: "",
    ContactDetails: "",
    times: ["0000", "0000"],
    LocationAvailabilityMode: "",
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
  const [disable, setDisable] = useState({
    Pincode: false,
    Pan: false,
    Gstin: false,
    Bank: false,
  });

  const authCtx = useContext(AuthContext);

  const redirect = useNavigate();

  const onSubmit = async () => {
    setLoad(true);
    if (
      showData.DOB === "" ||
      showData.cod === "" ||
      showData.City === "" ||
      showData.times == [] ||
      showData.Days === "" ||
      showData.State === "" ||
      showData.Gstin === "" ||
      showData.PanNo === "" ||
      showData.radius === "" ||
      showData.EmailID === "" ||
      showData.Pincode === "" ||
      showData.Street === "" ||
      showData.Building === "" ||
      showData.Address === "" ||
      showData.LastName === "" ||
      showData.IfscCode === "" ||
      showData.BankName === "" ||
      showData.FirstName === "" ||
      showData.LegalName === "" ||
      showData.AccountNo === "" ||
      showData.TimeToShip === "" ||
      showData.Percentage === "" ||
      showData.BranchName === "" ||
      showData.Description === "" ||
      showData.LongDes === "" ||
      showData.Cancellable === "" ||
      showData.Returnable === "" ||
      showData.amountValue === "" ||
      showData.returnWindow === "" ||
      showData.PickupReturn === "" ||
      showData.AcHolderName === "" ||
      showData.StoreLocation === "" ||
      showData.SupportEmail === "" ||
      showData.ContactDetails === "" ||
      showData.LocationAvailabilityMode === ""
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
    } else if (
      !disable.Pincode ||
      !disable.Bank ||
      !disable.Gstin ||
      !disable.Pan
    ) {
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: !disable.Pincode
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
          days: showData.Days,
          times: [],
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

          setLoad(false);

          redirect("/me");
        } else {
          console.log(response.data);

          setLoad(false);
        }
      } catch (e) {
        console.log(e);

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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    console.table(showData);
  }, [showData]);

  return (
    <>
      <div className={SvCss.Ldiv}>
        <div className={SvCss.boxDiv}>
          <Header load={load} onSubmit={onSubmit} />
          <Particulars showData={showData} setData={setData} />
          <Address
            disable={disable}
            setDisable={setDisable}
            showData={showData}
            setData={setData}
          />
          <Bank
            disable={disable}
            setDisable={setDisable}
            showData={showData}
            setData={setData}
          />
          <GstPan
            disable={disable}
            setDisable={setDisable}
            showData={showData}
            setData={setData}
          />
          <UploadFiles images={images} setImages={setImages} />
          <StoreDetails showData={showData} setData={setData} />

          {/* Scroll to top */}
          <div onClick={scrollToTop} className={SvCss.scrollToTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-up"
            >
              <path d="M8 6L12 2L16 6" />
              <path d="M12 2V22" />
            </svg>
          </div>
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
