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
      const response = await axios.post("/api/website/qna/post", showData, {
        headers: { Authorization: `${authCtx.token}` },
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
