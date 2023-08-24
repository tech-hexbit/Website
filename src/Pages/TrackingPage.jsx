import React from "react";
import { useParams, useNavigate } from "react-router-dom";

//components
import Header from "./../components/Tracking/TrackingHeader";

export default function TrackingPage() {
  const { id } = useParams();
  return (
    <div>
      <Header id={id} />
    </div>
  );
}
