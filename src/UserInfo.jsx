import React, { useEffect, useState } from "react";

// IP
import {
  isBrowser,
  isMobile,
  browserName,
  deviceType,
  osName,
} from "react-device-detect";
import { publicIp } from "public-ip";

// crypto
import CryptoJS from "crypto-js";

// axios
import axios from "axios";

export default function UserInfo() {
  const userInfo = async () => {
    const ip = await publicIp();

    const info = {
      ip,
      browser: browserName,
      device: deviceType,
      os: osName,
      isBrowser,
      isMobile,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language || navigator.languages[0],
      pageVisited: [window.location.href],
      pathname: [window.location.pathname],
    };

    console.table(info);

    try {
      let infoString = JSON.stringify(info);

      const data = CryptoJS.AES.encrypt(
        infoString,
        import.meta.env.VITE_BCRYPT
      ).toString();

      console.log(data);

      const response = await axios.post("/api/common/userInfo", {
        data,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userInfo();
  }, []);

  return <></>;
}
