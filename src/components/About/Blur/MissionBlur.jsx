import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

export default function MissionBlur({ src, blur }) {
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
          width={471}
          height={619.625}
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

// import "./css/Core.css";

// export default function ImageComponent() {

//   return (
//     <>

//     </>
//   );
// }
