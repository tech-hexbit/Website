import React, { useState, useEffect } from "react";

export default function Details({ selectedItem, closeOverlay, setLoad, load }) {
  useEffect(() => {
    console.log(selectedItem);
  }, [, selectedItem]);

  return <div>Details</div>;
}
