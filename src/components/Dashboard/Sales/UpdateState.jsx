import React, { useState } from "react";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// Css
import osCss from "./Css/overallSales.module.css";

export default function UpdateState(props) {
  const [edit, setEdit] = useState(false);
  const [Saveload, setSaveLoad] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const UpdateData = async (id) => {
    setSaveLoad(true);
    try {
      if (selectedValue !== "" || selectedValue !== "Select") {
        let data = {
          value: selectedValue,
          Id: id,
        };

        const response = await axios.post(
          "/api/common/Order/UpdateState",
          data,
          {
            headers: { Authorization: `${authCtx.token}` },
          }
        );

        if (response.data.success) {
          setSaveLoad(false);
          setSelectedValue("Select");

          loadData();

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
  return <div>UpdateState</div>;
}
