import React, { useEffect } from "react";

// data fetch
import {
  isBrowser,
  isMobile,
  browserName,
  deviceType,
  osName,
} from "react-device-detect";
import { publicIp } from "public-ip";

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
    };

    console.table(info);
  };
  useEffect(() => {
    userInfo();
  }, []);

  return <></>;
}
