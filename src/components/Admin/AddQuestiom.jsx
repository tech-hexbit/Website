import React, { useState, useEffect, useContext, useRef } from "react";

// components
import Load from "./../../MicroInteraction/Load";
import { Alert } from "./../../MicroInteraction/Alert";

// state
import AuthContext from "../../store/auth-context";

// axios
import axios from "axios";

// css
import AQCss from "./Css/AddQuestion.module.css";

export default function AddQuestiom(props) {
  const [load, setLoad] = useState(false);
  const [tagValue, setTagValue] = useState("");
  const [showData, setData] = useState({
    question: "",
    answer: "",
    tag: "",
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

  const updateData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...showData, [name]: value });
  };

  const onSubmit = async () => {
    setLoad(true);

    const { question, answer } = showData;

    if (question !== "" && answer !== "") {
      try {
        const response = await axios.post("/api/website/qna/post", showData, {
          headers: { Authorization: `${authCtx.token}` },
        });

        if (response.data.success) {
          setLoad(false);

          setError({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: "Successfully Added",
            val: true,
          });

          setData({
            question: "",
            answer: "",
          });

          props.setRef(true);
          props.setAdd(false);
        } else {
          setLoad(false);

          setError({
            mainColor: "#FDEDED",
            secondaryColor: "#F16360",
            symbol: "error",
            title: "Error",
            text: "Poduct Addition Failed",
            val: true,
          });
        }
      } catch (error) {
        console.log(error);

        setLoad(false);

        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Poduct Addition Failed",
          val: true,
        });
      }
    } else {
      setLoad(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Please fill all the feilds",
        val: true,
      });
      return;
    }
  };

  const handleSelectChange = (event) => {
    setTagValue(event.target.value);
  };

  return (
    <>
      <div className={AQCss.mDiv}>
        <div className={AQCss.titleDiv}>
          <p>Add Question(s)</p>

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
            class="lucide lucide-x"
            className={AQCss.closeBtn}
            onClick={() => {
              props.setAdd(false);
            }}
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
        <div className={AQCss.inpmDiv}>
          <select
            id="dropdown"
            value={tagValue}
            onChange={handleSelectChange}
            className={AQCss.inpTag}
          >
            <option value="">Select tag</option>
            <option value="mail">Mail</option>
            <option value="query">Query</option>
            <option value="cancel">Cancellation</option>
            <option value="refund">Refund</option>
            <option value="order">Order</option>
            <option value="approved">Important Bulletin</option>
          </select>
          <input
            type="text"
            name="question"
            id=""
            value={showData.question}
            placeholder="Question"
            className={AQCss.inpTag}
            onChange={updateData}
          />

          <textarea
            name="answer"
            id=""
            cols="30"
            rows="10"
            value={showData.answer}
            placeholder="Answer"
            className={AQCss.inpTag}
            onChange={updateData}
          ></textarea>
        </div>

        <div className={AQCss.submitDiv}>
          <button className={AQCss.SubmitTag} onClick={onSubmit}>
            {load ? <Load /> : "Submit"}
          </button>
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
