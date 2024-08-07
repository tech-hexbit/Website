import React, { useState, useEffect, useContext, useRef } from "react";

// components
import Load from "./../../MicroInteraction/Load";

// state
import AuthContext from "../../store/auth-context";

// axios
import axios from "axios";

// css
import AQCss from "./Css/AddQuestion.module.css";

export default function EditQuestion(props) {
  const [load, setLoad] = useState(false);
  const [showData, setData] = useState({
    _id: props.data._id,
    question: props.data.ques,
    answer: props.data.ans,
    tag: props.data.tag,
  });

  const authCtx = useContext(AuthContext);

  const updateData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...showData, [name]: value });
  };

  const handleSelectChange = (event) => {
    setData({ ...showData, tag: event.target.value });
  };

  const onSubmit = async () => {
    setLoad(true);

    const { question, answer } = showData;

    if (question !== "" && answer !== "") {
      try {
        const response = await axios.post("/api/website/qna/edit", showData, {
          headers: { Authorization: `${authCtx.token}` },
        });

        if (response.data.success) {
          setLoad(false);

          authCtx.showAlert({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: "Successfully Added",
          });

          setData({
            question: "",
            answer: "",
          });

          props.setRef(true);
          props.setShowEdit(false);
        } else {
          setLoad(false);

          authCtx.showAlert({
            mainColor: "#FDEDED",
            secondaryColor: "#F16360",
            symbol: "error",
            title: "Error",
            text: "Poduct Addition Failed",
          });
        }
      } catch (error) {
        console.log(error);

        setLoad(false);

        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Poduct Addition Failed",
        });
      }
    } else {
      setLoad(false);

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Please fill all the feilds",
      });
      return;
    }
  };

  return (
    <>
      <div className={AQCss.mDiv}>
        <div className={AQCss.titleDiv}>
          <p>Edit Question(s)</p>

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
              props.setShowEdit(false);
            }}
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>

        <div className={AQCss.inpmDiv}>
          <select
            id="dropdown"
            value={showData.tag}
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
            placeholder={props.data.ques}
            className={AQCss.inpTag}
            onChange={updateData}
          />

          <textarea
            name="answer"
            id=""
            cols="30"
            rows="10"
            value={showData.answer}
            placeholder={props.data.ans}
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
    </>
  );
}
