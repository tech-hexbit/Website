import React, { useState } from "react";
import PropTypes from "prop-types";

//css
import DfCss from "./Css/DaysField.module.css";
import OfCss from "./Css/OndcField.module.css";

export default function DaysField({ showData, setData }) {
  const [daySelect, setDaySelect] = useState(Array(7).fill(false));

  const setDay = (selectedDay) => {
    setDaySelect((dayselect) => {
      const val = dayselect;
      val[selectedDay] = !val[selectedDay];
      return val;
    });
    const selectedDays = daySelect.reduce((acc, selected, index) => {
      return selected ? [...acc, index + 1] : acc;
    }, []);
    setData({ ...showData, Days: selectedDays.join(",") });
  };

  return (
    <div className={OfCss.inpDiv}>
      <p className={OfCss.inputLabel}>Working Days:</p>
      <div className={DfCss.buttonDiv}>
        <div className={DfCss.buttons}>
          <button
            className={
              daySelect[0] ? DfCss.buttonSelect : DfCss.buttonNotSelect
            }
            onClick={() => {
              setDay(0);
            }}
          >
            Monday
          </button>
          <button
            className={
              daySelect[1] ? DfCss.buttonSelect : DfCss.buttonNotSelect
            }
            onClick={() => {
              setDay(1);
            }}
          >
            Tuesday
          </button>
          <button
            className={
              daySelect[2] ? DfCss.buttonSelect : DfCss.buttonNotSelect
            }
            onClick={() => {
              setDay(2);
            }}
          >
            Wednesday
          </button>
          <button
            className={
              daySelect[3] ? DfCss.buttonSelect : DfCss.buttonNotSelect
            }
            onClick={() => {
              setDay(3);
            }}
          >
            Thursday
          </button>
          <button
            className={
              daySelect[4] ? DfCss.buttonSelect : DfCss.buttonNotSelect
            }
            onClick={() => {
              setDay(4);
            }}
          >
            Friday
          </button>
          <button
            className={
              daySelect[5] ? DfCss.buttonSelect : DfCss.buttonNotSelect
            }
            onClick={() => {
              setDay(5);
            }}
          >
            Saturday
          </button>
          <button
            className={
              daySelect[6] ? DfCss.buttonSelect : DfCss.buttonNotSelect
            }
            onClick={() => {
              setDay(6);
            }}
          >
            Sunday
          </button>
        </div>
        <div className={DfCss.buttons}></div>{" "}
        <div className={DfCss.buttons}></div>
      </div>
    </div>
  );
}

DaysField.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
