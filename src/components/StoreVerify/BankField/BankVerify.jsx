import React from "react";
import { useContext } from "react";
import AuthContext from "../../../store/auth-context";

import axios from "axios";

const BankVerify = async (
  authCtx,
  setData,
  showData,
  disable,
  setDisable,
  setError
) => {
  //   const authCtx = useContext(AuthContext);
  try {
    const validBank = (response) => {
      setData({
        ...showData,
        AcHolderName: response.nameAtBank,
        BankName: response.bankName,
        BranchName: response.branch,
      });
      setDisable({ ...disable, Bank: true });
      console.log(disable);
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
      phone: authCtx.user.Phone,
      name: showData.AcHolderName,
      bankAccount: showData.AccountNo,
      ifsc: showData.IfscCode,
    };
    console.log(bankDetails);
    if (
      !(
        bankDetails.phone &&
        bankDetails.name &&
        bankDetails.bankAccount &&
        bankDetails.ifsc
      )
    ) {
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
        val: true,
      });
    } else {
      const response = await axios.post(
        "/api/verification/bank",
        bankDetails,
        {}
      );
      console.log(response.data);
      response.data.status === "SUCCESS"
        ? validBank(response.data.data)
        : invalidBank();
    }
  } catch (e) {
    console.log(e);
    // setError({
    //   mainColor: "#FFC0CB",
    //   secondaryColor: "#FF69B4",
    //   symbol: "pets",
    //   title: "Check it out",
    //   text: "Invalid Bank Details",
    //   val: true,
    // });
  }
};
export default BankVerify;
