import React, { useState, useEffect, useContext } from "react";

// state
import AuthContext from "./.././../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";

export default function Sellers() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [showRef, setRef] = useState(false);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    loadData();
    setRef(false);
  }, [, showRef]);

  return <div>Sellers</div>;
}
