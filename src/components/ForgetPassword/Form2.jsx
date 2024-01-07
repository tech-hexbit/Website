import React, { useEffect, useState } from "react";

//css
import fpstyle from "./CSS/ForgetPassword.module.css";

export default function Form2() {
  return (
    <>
      <div className={fpstyle.inputEP}>
        <label>Create New Password *</label>
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          id="password"
          name="password"
          value={input.newpwd}
          onChange={(e) => {
            setInput({ ...input, newpwd: e.target.value });
          }}
        />
      </div>

      {/* Phone */}
      <div className={fpstyle.inputPO}>
        <label htmlFor="password">
          Confirm New Password
          <span style={{ color: "#350B5E" }}>*</span>
        </label>
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          id="password"
          name="password"
          value={input.confirmpwd}
          onChange={(e) => {
            setInput({ ...input, confirmpwd: e.target.value });
          }}
        />
      </div>
    </>
  );
}
