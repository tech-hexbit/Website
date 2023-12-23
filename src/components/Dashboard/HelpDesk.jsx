import React, { useEffect } from "react";

export default function HelpDesk() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>HelpDesk</div>;
}
