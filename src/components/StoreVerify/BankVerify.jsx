import React from "react";

//axios
import axios from "axios";

const BankVerify = async (setData, showData, disable, setDisable, setError) => {
  try {
    const validBank = (response) => {
      setData({
        ...showData,
        AcHolderName: response.data.nameAtBank,
        BankName: response.data.bankName,
        BranchName: response.data.branch,
      });

      setDisable({ ...disable, Bank: true });
    };
    const invalidBank = () => {
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Invalid Bank Details",
        val: true,
      });
    };
    const bankDetails = {
      // phone: authCtx.user.Phone,
      name: showData.AcHolderName,
      bankAccount: showData.AccountNo,
      ifsc: showData.IfscCode,
    };
    // console.log(bankDetails);
    if (
      !(
        // bankDetails.phone &&
        (
          bankDetails.name &&
          bankDetails.bankAccount &&
          bankDetails.ifsc &&
          showData.BankName &&
          showData.BranchName
        )
      )
    ) {
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "error",
        title: "Check it out",
        text: "Please Fill All The Details",
        val: true,
      });
    } else {
      const response = await axios.post("/api/verification/bank", bankDetails);
      // console.log(response.data);
      response.data.success ? validBank(response.data.response) : invalidBank();
    }
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
export default BankVerify;
