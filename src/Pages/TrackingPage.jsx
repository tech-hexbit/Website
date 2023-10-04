import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// MicroInteraction
import Load from "./../MicroInteraction/LoadBlack";

//components
import TrackingHeader from "./../components/Tracking/TrackingHeader";

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
    <div>
      <TrackingHeader id={id} />
    </div>
  );
}
