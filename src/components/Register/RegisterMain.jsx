import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// axios
import axios from "axios";

// components
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import GrowCard from "./GrowCard";

// css
import RFCss from "./Css/Register.module.css";

//store
import AuthContext from "../../store/auth-context";

// img
import icon1 from "../../assets/register/icon1.png";
import icon2 from "../../assets/register/icon2.png";
import icon3 from "../../assets/register/icon3.png";
import icon4 from "../../assets/register/icon4.png";

export default function RegisterMain() {
  const [count, setCount] = useState(1);
  const [load, setLoad] = useState(false);
  const [input, setInput] = useState({
    Phone: "",
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
    category: [],
    AdditionalInfo: "",
  });

  const authCtx = useContext(AuthContext);

  const redirect = useNavigate();

  const register = async () => {
    setLoad(true);

    try {
      const response = await axios.post("/api/website/auth/register/", input);

      if (response.data?.exists) {
        setLoad(false);

        authCtx.showAlert({
          mainColor: "#FFF4E5",
          secondaryColor: "#FFA117",
          symbol: "warning",
          title: "Warning",
          text: "User Exists. Kindly try to login",
        });

        return;
      }

      if (response.data.success) {
        setLoad(false);

        authCtx.clearAlert();

        redirect("/signIn");
      } else {
        setLoad(false);
      }
    } catch (e) {
      setLoad(false);

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
      });
    }
  };

  return (
    <>
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
              setCount={setCount}
              input={input}
            />
          )}

          {count == 3 && (
            <Form3
              button="Register"
              input={input}
              load={load}
              // variant={variants}
              setInput={setInput}
              register={register}
            />
          )}
        </div>
      </div>
    </>
  );
}
