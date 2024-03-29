import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import PropTypes from "prop-types";

export default function ImgComp({ src, blur }) {
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
      <div style={{ display: imageLoaded ? "none" : "inline" }}>
        <Blurhash
          hash={blur}
          width={600}
          height={250}
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

ImgComp.propTypes = {
  src: PropTypes.string.isRequired,
  blur: PropTypes.string.isRequired,
};
