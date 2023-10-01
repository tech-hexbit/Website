import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

export default function MissionBlurFounder({ src, blur }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      <div
        style={{
          display: imageLoaded ? "none" : "inline",
        }}
      >
        <Blurhash
          hash={blur}
          width={167.8}
          height={223.72}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        src={src}
        alt=""
        className="memImg"
        style={{ display: !imageLoaded ? "none" : "inline",width:!imageLoaded ? "0%":"100%",objectFit:!imageLoaded ? "none" : "cover",aspectRatio:!imageLoaded ? "none" :"3/4" }}
      />
    </>
  );
}