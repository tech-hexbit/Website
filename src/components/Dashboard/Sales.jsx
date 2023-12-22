import React, { useState, useEffect } from "react";

// components
import OverallSales from "./Sales/OverallSales";

export default function Sales() {
  const [state, set] = useState(false);

  useEffect(() =>{
    console.log(state);

  }, [state]);
  return <>{state ? "Hello" : <OverallSales set={set}state={state} />} </>;
  
}



