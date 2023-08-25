import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// components
import Form1 from "./Form1";
import Form2 from "./Form2";
import GrowCard from "./GrowCard";
import { Alert } from "./../../MicroInteraction/Alert";
import Load from "./../../MicroInteraction/Load";

// css
import RFCss from "./Css/Register.module.css";

// img
import icon1 from "../../assets/register/icon1.png";
import icon2 from "../../assets/register/icon2.png";
import icon3 from "../../assets/register/icon3.png";
import icon4 from "../../assets/register/icon4.png";

export default function RegisterMain() {
  const [count, setCount] = useState(1);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    Phone: 0,
    Email: "",
    Address: "",
    Password: "",
    BusinessName: "",
    ImporterLicense: "",
    GSTIN: "",
    ShopName: "",
    State: "",
    City: "",
    Pincode: "",
    AdditionalInfo: "",
  });

  const redirect = useNavigate();

  const register = async () => {
    if (
      input.ShopName == "" ||
      input.State == "" ||
      input.City == "" ||
      input.Pincode == "" ||
      input.AdditionalInfo == ""
    ) {
      setError("Please fill all fields!!");
      window.scrollTo(0, 0);
    } else {
      console.log(input);

      const response = await axios.post("/api/website/auth/register/", input);
      console.log(response);
      setError("");
      redirect("/");
    }
  };

  return (
    <div className={RFCss.mainDiv}>
      <div className={RFCss.left}>
        <div className={RFCss.heading}>
          “<span>Welcome</span> To a Revolutionary Full-Stack{" "}
          <span>Seller Solution.</span>”
        </div>
        <div className={RFCss.subHead}>
          Grow your business with new customers on the <b>Hexbit Ecommerce</b>{" "}
          network
        </div>
        <div className={RFCss.points}>
          <div className={RFCss.growCard}>
            <GrowCard
              image={icon1}
              heading="MORE BUYERS"
              subHead="Access to the entire buyer universe"
            />
          </div>
          <div className={RFCss.growCard}>
            <GrowCard
              image={icon2}
              heading="ZERO COST"
              subHead="No upfront cost to get started"
            />
          </div>
          <div className={RFCss.growCard}>
            <GrowCard
              image={icon3}
              heading="EASY TO USE"
              subHead="Start selling in no time"
            />
          </div>
          <div className={RFCss.growCard}>
            <GrowCard
              image={icon4}
              heading="GROW TOUR BUSINESS"
              subHead="Promote your business with your own webpage"
            />
          </div>
        </div>
      </div>
      <div className={RFCss.right}>
        {count == 1 && (
          <Form1
            button="Next"
            setCount={setCount}
            setInput={setInput}
            input={input}
          />
        )}
        {count == 2 && (
          <Form2
            button="Select Product Categories"
            setInput={setInput}
            register={register}
            input={input}
            error={error}
          />
        )}
      </div>
    </div>
  );
}
