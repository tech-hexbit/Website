import React from "react";

export default function GeoLocation() {
  const successCallback = (position) => {
    setData({
      ...showData,
      gps: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
    });
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  return <div>GeoLocation</div>;
}