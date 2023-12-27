import React, { useState, useEffect } from "react";

// components
import OverallSales from "./Sales/OverallSales";

export default function Sales() {
  const [state, set] = useState(false);
  return (
    <>
      <OverallSales set={set} state={state} />
    </>
  );
}
