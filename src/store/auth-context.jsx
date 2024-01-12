import React, { useState, useEffect, useCallback, useMemo } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  user: {
    image: "",
    Email: "",
    Phone: 0,
    access: 0,
    BusinessName: "",
    ImporterLicense: "",
    GSTIN: "",
    ShopName: "",
    Address: "",
    State: "",
    City: "",
    Pincode: "",
    AdditionalInfo: "",
    accountVerified: false,
    emailVerified: false,
    Store: [],
  },
  target: null,
  login: async (token) => {},
  logout: () => {},
  settarget: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();

  const remainingDuration = expirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const userdata = localStorage.getItem("user");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("user");
    return null;
  }
  var ms = remainingTime,
    min = Math.floor((ms / 1000 / 60) << 0),
    sec = Math.floor((ms / 1000) % 60);

  console.log(min + ":" + sec);
  const finaluser = JSON.parse(userdata);
  return {
    token: storedToken,
    duration: remainingTime,
    user: finaluser,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();

  let initialToken = null;
  let initialuser = {};
  let logedin = false;
  if (tokenData) {
    initialToken = tokenData.token;
    initialuser = tokenData.user;
    logedin = true;
  }

  const [token, setToken] = useState(initialToken);
  const [user, setUser] = useState(initialuser);
  const [target, setTarget] = useState("");
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(logedin);

  console.log("userislogedin : -" + userIsLoggedIn);

  const targetHandler = (t) => {
    setTarget(t);
  };
  const logoutHandler = useCallback(() => {
    setToken(null);
    setUserIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("user");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }

    window.location.reload();
  }, []);

  const loginHandler = (
    image,
    Email,
    Phone,
    access,
    BusinessName,
    ImporterLicense,
    GSTIN,
    ShopName,
    Address,
    State,
    City,
    Pincode,
    AdditionalInfo,
    accountVerified,
    emailVerified,
    Store,
    token,
    expirationTime
  ) => {
    localStorage.setItem("token", token);

    const setuserdata = {
      Email: Email,
      image: image,
      Phone: Phone,
      access: access,
      BusinessName: BusinessName,
      ImporterLicense: ImporterLicense,
      GSTIN: GSTIN,
      ShopName: ShopName,
      Address: Address,
      State: State,
      City: City,
      Pincode: Pincode,
      AdditionalInfo: AdditionalInfo,
      accountVerified: accountVerified,
      emailVerified: emailVerified,
      Store: Store,
    };

    localStorage.setItem("user", JSON.stringify(setuserdata));

    const nowTime = new Date().getTime();
    const exptime = nowTime + expirationTime;
    const remainingTime = calculateRemainingTime(exptime);
    localStorage.setItem("expirationTime", exptime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
    setUser(setuserdata);
    setToken(token);
    setUserIsLoggedIn(true);
  };

  useEffect(() => {
    if (tokenData) {
      setToken(tokenData.token);
      setUserIsLoggedIn(true);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const updateStoreHandler = (newStore) => {
    const updatedUser = { ...user, Store: newStore };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const contextValue = useMemo(
    () => ({
      token: token,
      isLoggedIn: userIsLoggedIn,
      user: user,
      target: target,
      login: loginHandler,
      logout: logoutHandler,
      settarget: targetHandler,
      updateStore: updateStoreHandler,
    }),
    [token, userIsLoggedIn, target, user]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
