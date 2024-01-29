import React from "react";

//axios
import axios from "axios";

export const GstinVerify = async ({
  setData,
  showData,
  disable,
  setDisable,
  setError,
}) => {
  try {
    const validGstin = ({ response }) => {
      setData({
        ...showData,
        Gstin: response.data.response.GSTIN,
      });
      setDisable({ ...disable, Gstin: true });
    };
    const invalidGstin = () => {
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "error",
        title: "Check it out",
        text: "Invalid Gstin No",
        val: true,
      });
    };
    const GstinDetails = {
      GSTIN: showData.Gstin,
    };
    const response = await axios.post("/api/verification/gstin", GstinDetails);

    response.data.success ? validGstin({ response }) : invalidGstin();
  } catch (e) {
    setError({
      mainColor: "#FDEDED",
      secondaryColor: "#F16360",
      symbol: "error",
      title: "Error",
      text: "An unexpected error occurred",
      val: true,
    });
  }
};

export const PanVerify = async ({
  setData,
  showData,
  disable,
  setDisable,
  setError,
}) => {
  try {
    const validPan = ({ response }) => {
      setData({
        ...showData,
        PanNo: response.data.response.pan,
      });
      setDisable({ ...disable, Pan: true });
    };
    const invalidPan = () => {
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "error",
        title: "Check it out",
        text: "Invalid Pan No",
        val: true,
      });
    };
    const panDetails = {
      pan: showData.PanNo,
      name: showData.FirstName,
    };
    const response = await axios.post("/api/verification/pan", panDetails);

    response.data.success ? validPan({ response }) : invalidPan();
  } catch (e) {
    console.log(e);
    setError({
      mainColor: "#FDEDED",
      secondaryColor: "#F16360",
      symbol: "error",
      title: "Error",
      text: "An unexpected error occurred",
      val: true,
    });
  }
};
