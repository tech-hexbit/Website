import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../MicroInteraction/Loading";

//components
import TrackingHeader from "./../components/Tracking/TrackingHeader";

// css
import TPCss from "./Css/TrackPage.module.css";

export default function TrackingPage() {
  const [load, setLoad] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(`/api/common/order/track/${id}`);

      if (response.data.success) {
        console.log(response.data.orderTrack);

        setLoad(false);
      } else {
        setLoad(false);

        console.log(e);
      }
    } catch (e) {
      setLoad(false);

      console.log(e);
    }
  };
  return (
    <>
      {!load ? (
        // <div className={TPCss.mDiv}>
        <Load />
      ) : (
        // </div>
        <TrackingHeader id={id} />
      )}
    </>
  );
}
