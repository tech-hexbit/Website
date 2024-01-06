import React, { useState, useContext } from "react";

// state
import AuthContext from "./../../../store/auth-context";

// components
import OrderLayUpdate from "./OrderLayUpdate";

// axios
import axios from "axios";

// MicroInteraction
import SmallLoad from "./../../../MicroInteraction/SmallLoad";

// Css
import osCss from "./Css/overallSales.module.css";

export default function LayUpdate(props) {
  const [edit, setEdit] = useState(false);
  const [Saveload, setSaveLoad] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const authCtx = useContext(AuthContext);

  const UpdateData = async (id) => {
    setSaveLoad(true);
    try {
      if (selectedValue !== "" || selectedValue !== "Select") {
        let data = {
          value: selectedValue,
          ItemId: "",
          Id: id,
        };

        const response = await axios.post(
          "/api/common/Order/UpdateStateItem",
          data,
          {
            headers: { Authorization: `${authCtx.token}` },
          }
        );

        if (response.data.success) {
          setSaveLoad(false);
          setSelectedValue("Select");

          props.setLoadDataState(!props.loadDataState);

          setEdit(!edit);
        } else {
          setSaveLoad(false);
        }
      } else {
        setSaveLoad(false);
      }
    } catch (e) {
      setLoad(false);
      setSaveLoad(false);

      console.log(e);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  console.log(props);
  return (
    <>
      <td data-cell="Status">{props.state}</td>
    </>
  );
}
