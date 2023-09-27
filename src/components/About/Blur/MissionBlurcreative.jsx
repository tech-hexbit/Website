import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

export default function MissionBlurcreative({ src, blur }) {
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
          width={180}
          height={180}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        src={src}
        alt=""
        className="memImg"
        style={{ display: !imageLoaded ? "none" : "inline",}}
      />
    </>
  );
}
