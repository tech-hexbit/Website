import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../MicroInteraction/Loading";

//components
import TrackingHeader from "./../components/Tracking/TrackingHeader";

export default function TrackingPage() {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    loadData();
  }, []);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(`/api/common/order/track/${id}`);

      if (response.data.success) {
        setData(response.data.orderTrack);

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
  return <>{load ? <Load /> : <TrackingHeader data={data} />}</>;
}
