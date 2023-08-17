import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

import "./ImageComponent.css";

export default function ImageComponent({ src, blur, load }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      imageLoaded ? load(false) : "";
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  //   useEffect(() => {
  //     imageLoaded ? load(false) : "";
  //   }, [imageLoaded]);

  return (
    <>
      <div style={{ display: imageLoaded ? "none" : "inline" }}>
        <Blurhash
          hash={blur}
          width={1800}
          height={1052}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        src={src}
        alt=""
        className="CorememCardImg"
        style={{ display: !imageLoaded ? "none" : "inline" }}
      />
    </>
  );
}
