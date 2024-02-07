import React, { useState, useContext } from "react";

import AuthContext from "../../store/auth-context";

// axios
import axios from "axios";

// CSS
import CCss from "./Css/Contacted.module.css";

export default function UpdateContacted(props) {
  const authCtx = useContext(AuthContext);
  const tagValue = props.tag;

  const updateTag = async () => {
    // console.log(props.id)
    try {
      const res = await axios.post(
        "/api/website/ContactUs/admin/updateTag",
        { id: props.id },
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );
      console.log(res.data.message);
    } catch (e) {
      console.error("Tag update failed:", e);
    }
  };

  const contactedhandle = async () => {
    try {
      const res = await axios.get(`api/website/ContactUs/admin/contacted`, {
        headers: { Authorization: `${authCtx.token}` },
      });
      const user = res.data.user;
      console.log(user.tag);
      setTagValue(true);
      updateTag();
    } catch (e) {
      console.log("contacted not working...");
    }
  };

  console.log(props.tag);
  return (
    <div>
      {tagValue ? (
        <h4 className={CCss.contacted}>Contacted</h4>
      ) : (
       
        <div class="checkbox-wrapper-3" >
                  <input type="checkbox" id="cbx-3"  />
                  <label for="cbx-3" class="toggle" value={tagValue} onClick={contactedhandle}  >
                    <span> </span>
                  </label>
                </div>
      )}
    </div>
  );
}
