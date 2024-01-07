import React, { useEffect } from "react";
import ForgetPasswordSec from "../components/ForgetPassword/ForgetPasswordSec";

export default function ForgotPasswordSec(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div>
            <ForgetPasswordSec/>
        </div>
    )
}

