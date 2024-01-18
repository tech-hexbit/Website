// import SvCss from "../Css/StoreVerify.module.css";
import React from "react";
import SvCss from "../../Pages/Css/StoreVerify.module.css";
import axios from "axios";

const pincodeVerify = async ({
  setData,
  showData,
  setDisable,
  setVerify,
  setError,
}) => {
  try {
    const validPin = ({ response }) => {
      setData({
        ...showData,
        State: response.data[0].PostOffice[0].State,
        City: response.data[0].PostOffice[0].Name,
      });
      setDisable(true);
      setVerify(true);
    };
    const invalidPin = () => {
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Invalid pincode",
        val: true,
      });
      setVerify(false);
    };
    const response = await axios.get(
      `https://api.postalpincode.in/pincode/${showData.Pincode}`
    );
    response.data[0].PostOffice ? validPin({ response }) : invalidPin();
  } catch (e) {
    // console.log(e);
  }
};
const PincodeField = ({
  showData,
  setData,
  verifyPin,
  disable,
  setDisable,
  setVerify,
  setError,
}) => {
  return (
    <div>
      {showData.Pincode.length >= 6 ? (
        <div className={SvCss.inpDiv}>
          <p className={SvCss.input_label}>Pincode</p>
          <div className={SvCss.input_div_pincode}>
            <input
              disabled={disable}
              type="number"
              name="Pincode"
              value={showData.Pincode}
              id=""
              placeholder="Your Pincode"
              onChange={(e) => {
                setData({ ...showData, Pincode: e.target.value });
              }}
            />
            <div className={SvCss.verify_button_div}>
              <button
                className={SvCss.verify_button}
                onClick={() => {
                  pincodeVerify({
                    setData,
                    showData,
                    setDisable,
                    setVerify,
                    setError,
                  });
                }}
              >
                {verifyPin ? (
                  <svg
                    // className={SvCss.badge_icon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-badge-check"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ) : (
                  "Verify"
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={SvCss.inpDiv}>
          <p className={SvCss.input_label}>Pincode</p>
          <div className={SvCss.input_div_pincode}>
            <input
              disabled={disable}
              type="number"
              name="Pincode"
              value={showData.Pincode}
              id=""
              placeholder="Your Pincode"
              onChange={(e) => {
                setData({ ...showData, Pincode: e.target.value });
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default PincodeField;
