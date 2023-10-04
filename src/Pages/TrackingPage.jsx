import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

//components
import TrackingHeader from "./../components/Tracking/TrackingHeader";

export default function TrackingPage() {
  const { id } = useParams();

  return (
    <div>
      <TrackingHeader id={id} />
    </div>
  );
}
