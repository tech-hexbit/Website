import React, { useEffect, useState } from "react";

// css
import MapCss from "./Css/Map.module.css";

export default function Map() {
  const [position, setPosition] = useState([23.219255, 77.3983159]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  let map, marker;

  const initMap = () => {
    map = new window.mappls.Map("map", {
      center: position,
      zoomControl: true,
      location: true,
    });
    map.on("click", handleMapClick);

    updateMarker(position);
  };

  const loadMapScript = () => {
    const script = document.createElement("script");
    script.src =
      "https://apis.mappls.com/advancedmaps/api/ba5fb03490b2bb6bd9d6c12f1db5392d/map_sdk?layer=vector&v=3.0&callback=initMap";
    script.defer = true;
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    script.onload = () => {
      window.initMap = initMap;
    };
  };

  const updateMarker = (newPosition) => {
    if (marker) {
      marker.remove();
    }

    marker = new window.mappls.Marker({
      map,
      position: { lat: newPosition[0], lng: newPosition[1] },
      fitbounds: true,
      icon: "https://apis.mapmyindia.com/map_v3/1.png",
    });

    // Update the state with the new position
    setPosition(newPosition);
  };

  // Event handler for map click
  const handleMapClick = (event) => {
    const { lat, lng } = event.lngLat || event.latlng;
    if (lat && lng) {
      console.log(`Clicked at Latitude: ${lat}, Longitude: ${lng}`);

      const newPosition = [lat, lng];

      updateMarker(newPosition);
    } else {
      console.error(
        "Unable to retrieve latitude and longitude from the click event."
      );
    }
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const currentPosition = [latitude, longitude];
        setPosition(currentPosition);
        map.flyTo({ center: currentPosition, zoom: 15 });

        updateMarker(currentPosition);
      },
      (error) => {
        console.error("Error getting current location:", error.message);
      }
    );
  };

  const handleRelocateClick = () => {
    getCurrentLocation();
  };

  useEffect(() => {
    if (!window.mappls) {
      loadMapScript();
    } else {
      if (isInitialLoad) {
        getCurrentLocation();
        setIsInitialLoad(false);
      }
      initMap();
    }

    return () => {
      if (marker) {
        marker.remove();
      }
      if (map) {
        map.off("click", handleMapClick);
      }
    };
  }, [loadMapScript, initMap, isInitialLoad]);

  return (
    <div>
      <p className={MapCss.inputLabel}>Store Location</p>
      <div
        id="map"
        style={{ width: "100%", height: "80vh", margin: "10px 0", padding: 0 }}
        className=""
      ></div>

      <div>
        <button onClick={handleRelocateClick}>
          Relocate to Current Location
        </button>
      </div>
      <div>
        Latitude: {position[0]}, Longitude: {position[1]}
      </div>
    </div>
  );
}
