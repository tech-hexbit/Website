import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

export default function MissionBlurBusiness({ src, blur }) {
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
          width={265.59}
          height={201.31}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        src={src}
        alt=""
        className="memImg"
        style={{ display: !imageLoaded ? "none" : "inline" }}
      />
    </>
  );
}