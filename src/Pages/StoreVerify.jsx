import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// axios
import axios from "axios";

// state
import AuthContext from "./../store/auth-context";

// MicroInteraction
import Load from "./../MicroInteraction/Load";
import { Alert } from "./../MicroInteraction/Alert";

// css
import SvCss from "./Css/StoreVerify.module.css";

// import UserSideBar from "./../components/Dashboard/UserSideBar";

const TextInput = ({ showData, setData, Label, type, field, placeholder }) => {
  return (
    <div className={SvCss.inpDiv}>
      <p className={SvCss.input_label}>{Label}</p>
      <input
        type={type}
        name="days"
        value={showData[field]}
        id=""
        placeholder={placeholder}
        onChange={(e) => {
          setData({ ...showData, [field]: e.target.value });
        }}
      />
    </div>
  );
};
const BankFields = (props) => {
  return (
    <div className={SvCss.nested_field_large_div}>
      <div>{props.text}</div>
      <div className={SvCss.nested_field_small_div}>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>{props.label1}</div>
          <input placeholder={props.placeholder1} type={props.type1} />
        </div>

        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>{props.label2}</div>
          <input placeholder={props.placeholder2} type={props.type2} />
        </div>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>{props.label3}</div>
          <input placeholder={props.placeholder3} type={props.type3} />
        </div>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>{props.label4}</div>
          <input placeholder={props.placeholder4} type={props.type4} />
        </div>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>{props.label5}</div>
          <input placeholder={props.placeholder5} type={props.type5} />
        </div>
      </div>
    </div>
  );
};
const Ondc_Details = (props) => {
  return (
    <div className={SvCss.nested_field_large_div}>
      <div>{props.text}</div>
      <div className={SvCss.nested_field_small_div}>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>{props.label1}</div>
          <select name="languages" id="lang">
            <option value="select">{props.placeholder_label1}</option>
            {props.label1_val1 ? (
              <option value={props.label1_val1}>{props.label1_val1}</option>
            ) : (
              ""
            )}
            {props.label1_val2 ? (
              <option value={props.label1_val2}>{props.label1_val2}</option>
            ) : (
              ""
            )}
          </select>
        </div>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>{props.label2}</div>
          <select name="languages" id="lang">
            <option value="select">{props.placeholder_label2}</option>
            {props.label2_val1 ? (
              <option value={props.label2_val1}>{props.label2_val1}</option>
            ) : (
              ""
            )}
            {props.label2_val2 ? (
              <option value={props.label2_val2}>{props.label2_val2}</option>
            ) : (
              ""
            )}
          </select>
        </div>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>{props.label3}</div>
          <select name="languages" id="lang">
            <option value="select">{props.placeholder_label3}</option>
            {props.label3_val1 ? (
              <option value={props.label3_val1}>{props.label3_val1}</option>
            ) : (
              ""
            )}
            {props.label3_val2 ? (
              <option value={props.label3_val2}>{props.label3_val2}</option>
            ) : (
              ""
            )}
          </select>
        </div>
        <div className={SvCss.inpDiv}>
          <p className={SvCss.input_label}>{props.label4}</p>
          <input
            type="number"
            name="Contact Details For Customer Care"
            value={props.showData.ContactDetailsForConsumerCare}
            id=""
            placeholder={props.placeholder_label4}
            onChange={(e) => {
              props.setData({
                ...props.showData,
                ContactDetailsForConsumerCare: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
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
  const [imageUploadCheque, setImageUploadCheque] = useState();
  const [imageUploadAddress, setImageUploadAddress] = useState();
  const [imageUploadID, setImageUploadID] = useState();

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

  const handleClick = () => {
    fileInp_cheque.current.click();
  };
  const handleClick1 = () => {
    fileInp_address.current.click();
  };
  const handleClick2 = () => {
    fileInp_id.current.click();
  };

  const handleImageCheque = (e) => {
    setImageUploadCheque(e.target.files[0]);
  };
  const handleImageAddress = (e) => {
    setImageUploadAddress(e.target.files[0]);
  };
  const handleImageID = (e) => {
    setImageUploadID(e.target.files[0]);
  };

  const pincodeVerify = async () => {
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
          <div className={SvCss.heading}>
            <p className={SvCss.createYourStore}>KYC DATA</p>
            <div className={SvCss.save_buttons}>
              <button className={SvCss.save_button_1}>Save</button>
              <button className={SvCss.save_button_2}>Save & Next</button>
            </div>
          </div>
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
                        pincodeVerify();
                      }}
                    >
                      {verifyPin ? <BadgeCheck size={20} /> : "Verify"}
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
          <TextInput
            type="text"
            Label="Address"
            showData={showData}
            setData={setData}
            field="Address"
            placeholder="Your address"
          />
          <div className={SvCss.inpDiv}>
            <p className={SvCss.input_label}>City</p>
            <div className={SvCss.input_div_verified}>
              <input
                disabled={disable}
                type="text"
                name="City"
                value={showData.City}
                id=""
                placeholder="Your City"
                onChange={(e) => {
                  setData({ ...showData, City: e.target.value });
                }}
              />
              {verifyPin ? <BadgeCheck className={SvCss.badge_icon} /> : ""}
            </div>
          </div>
          <div className={SvCss.inpDiv}>
            <p className={SvCss.input_label}>State</p>
            <div className={SvCss.input_div_verified}>
              <input
                disabled={disable}
                type="text"
                name="State"
                value={showData.State}
                id=""
                placeholder="Your State"
                onChange={(e) => {
                  setData({ ...showData, State: e.target.value });
                }}
              />
              {verifyPin ? <BadgeCheck className={SvCss.badge_icon} /> : ""}
            </div>
          </div>
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
          <div className={SvCss.input_ldiv_file}>
            <p className={SvCss.input_label}>Upload Cancelled Cheque</p>
            <div className={SvCss.input_div_file}>
              <input
                className={SvCss.input_file}
                type="file"
                name="file"
                placeholder="i"
                onChange={(e) => {
                  handleImageCheque(e);
                }}
                ref={fileInp_cheque}
              />
              {imageUploadCheque ? (
                <img
                  src={URL.createObjectURL(imageUploadCheque)}
                  alt=""
                  className={SvCss.prevImg}
                />
              ) : (
                ""
              )}
              <div className={SvCss.addImgDiv} onClick={handleClick}>
                <div className={SvCss["text-center"]}>
                  <p>+</p>
                </div>
              </div>
            </div>
          </div>
          <div className={SvCss.input_ldiv_file}>
            <p className={SvCss.input_label}>Address Proof (GSTIN)</p>
            <div className={SvCss.input_div_file}>
              <input
                className={SvCss.input_file}
                type="file"
                name="file"
                placeholder="Address "
                onChange={(e) => {
                  handleImageAddress(e);
                }}
                ref={fileInp_address}
              />
              {imageUploadAddress ? (
                <img
                  src={URL.createObjectURL(imageUploadAddress)}
                  alt=""
                  className={SvCss.prevImg}
                />
              ) : (
                ""
              )}
              <div className={SvCss.addImgDiv} onClick={handleClick1}>
                <div className={SvCss["text-center"]}>
                  <p>+</p>
                </div>
              </div>
            </div>
          </div>
          <div className={SvCss.input_ldiv_file}>
            <p className={SvCss.input_label}>ID Proof (PAN CARD)</p>
            <div className={SvCss.input_div_file}>
              <input
                className={SvCss.input_file}
                type="file"
                name="file"
                placeholder="PAN Card "
                onChange={(e) => {
                  handleImageID(e);
                }}
                ref={fileInp_id}
              />
              {imageUploadID ? (
                <img
                  src={URL.createObjectURL(imageUploadID)}
                  alt=""
                  className={SvCss.prevImg}
                />
              ) : (
                ""
              )}
              <div className={SvCss.addImgDiv} onClick={handleClick2}>
                <div className={SvCss["text-center"]}>
                  <p>+</p>
                </div>
              </div>
            </div>
          </div>
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
          <div className={SvCss.timing_large_div}>
            <p className={SvCss.input_label}>Store Timing</p>
            <div className={SvCss.timing_small_div}>
              <input
                type="time"
                name="Store_Timing"
                value={showData.StoreTimingStart}
                id=""
                placeholder="0900"
                onChange={(e) => {
                  setData({ ...showData, StoreTimingStart: e.target.value });
                }}
              />
              <input
                type="time"
                name="days"
                value={showData.StoreTimingEnd}
                id=""
                placeholder="1800"
                onChange={(e) => {
                  setData({ ...showData, StoreTimingEnd: e.target.value });
                }}
              />
            </div>
          </div>
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
