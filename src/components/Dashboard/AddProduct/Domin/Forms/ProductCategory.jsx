import { useState, useEffect } from "react";
import PropTypes from "prop-types";

//component
import TxtArea from "../Input/TxtArea";

// css
import FCss from "../Css/Form.module.css";

export default function ProductCategory({ setData, showData }) {
  const [tags, settags] = useState([]);
  const [tagvalue, settagvalue] = useState("");

  const onChangeTag = (e) => {
    if (e.target.value === ",") {
      settagvalue("");
    } else {
      settagvalue(e.target.value);
    }
  };

  const addtags = (e) => {
    if (e.keyCode === 8 && tagvalue === "") {
      console.log("Backspace Pressed");

      if (tags.length > 0) {
        const updatedTags = tags.slice(0, -1);
        settags(updatedTags);
      }
    }

    if ((e.keyCode === 13 && tagvalue) || (e.keyCode === 188 && tagvalue)) {
      settags([...tags, tagvalue]);
      settagvalue("");
    }
  };

  const deletetag = (val) => {
    let remaintags = tags.filter((t) => t != val);
    settags(remaintags);
  };

  useEffect(() => {
    console.log("tagvalue = " + tagvalue);
  }, [tagvalue]);

  useEffect(() => {
    setData({
      ...showData,
      tags,
    });
    console.log(tags);
  }, [tags]);

  return (
    <>
      {/* <p className={PrCss.AboutYou}>Publish Info</p>
      <div className={ItCss.inpDiv}>
        <p className={ItCss.inputLabel}>Category</p>
        <select
          name="category_id"
          id=""
          className={ItCss.inp}
          onChange={handleSelectChange}
        >
          <option value="Selected" selected disabled hidden>
            Select
          </option>
          {Object.keys(optionData.categories).map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div> */}

      {/* Tags */}
      <div className={FCss.inpDiv}>
        <p className={FCss.label}>Tags</p>
        <div className={FCss.inpTag}>
          {tags.map((tag, index) => (
            <div key={index} className={FCss.TagP}>
              <p>{tag}</p>{" "}
              <p onClick={() => deletetag(tag)} className={FCss.CloseX}>
                X
              </p>
            </div>
          ))}
          <div className={FCss.inputt}>
            <input
              value={tagvalue}
              type="text"
              placeholder="Press Enter to input"
              onChange={onChangeTag}
              onKeyDown={addtags}
            />
          </div>
        </div>
      </div>

      {/* Additives Info */}
      <TxtArea
        Label="Additional Info"
        showData={showData}
        setData={setData}
        field="additives_info"
        placeholder="Materials, Fabrics, Washing Instructions, etc"
      />
    </>
  );
}

ProductCategory.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
