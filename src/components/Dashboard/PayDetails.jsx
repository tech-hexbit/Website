import React, { useEffect } from "react";

export default function PayDetails() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>PayDetails</div>;
}
