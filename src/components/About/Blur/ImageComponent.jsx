import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

import "./Css/ImageComponent.css";
import LoadingPage from "./../../../MicroInteraction/Loading";

export default function ImageComponent({ src, blur }) {
  // const [show, load] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      // load(false);
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  // useEffect(() => {
  //   console.log(show + " <- ImageComponent");
  // }, [show]);

  // useEffect(() => {
  //   console.log(imageLoaded + " <- imageLoaded");
  //   imageLoaded ? "True" : "False";
  // }, [imageLoaded]);

  return (
    <>
      <div
        style={{
          display: imageLoaded ? "none" : "inline",
        }}
      >
        {/* <Blurhash
          hash={blur}
          width={1800}
          height={1052}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        /> */}
        <LoadingPage />
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
