import React, { useEffect, useState } from "react";

// components
import { Alert } from "./../../MicroInteraction/Alert";
import Load from "./../../MicroInteraction/Load";

// css
import AQCss from "./Css/AddQuestion.module.css";

export default function AddQuestiom(props) {
  const [load, setLoad] = useState(false);
  const [showData, setData] = useState({
    question: "",
    answer: "",
  });
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const updateData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...showData, [name]: value });
  };

  const onSubmit = async () => {
    setLoad(true);

    const { question, answer } = showData;

    if (question !== "" && answer !== "") {
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
          <input
            type="text"
            name="question"
            id=""
            value={showData.question}
            placeholder="Question"
            className={AQCss.inpTag}
            onChange={updateData}
          />

          <input
            type="text"
            name="answer"
            id=""
            value={showData.answer}
            placeholder="Answer"
            className={AQCss.inpTag}
            onChange={updateData}
          />
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
