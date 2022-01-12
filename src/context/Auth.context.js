import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [sessionToken, setSessionToken] = useState(null);

  const cookieName = "SESSION_TOKEN";
  const expiryInDays = 7;

  const getLoggedIn = async (value, sessionToken) => {
    setLoggedIn(value);
    setSessionToken(sessionToken);
    createCookie(cookieName, sessionToken, expiryInDays);
  };

  const createCookie = (name, value, days) => {
    var expires;
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toGMTString();
    } else {
      expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  };

  function getCookie(cookieName) {
    let cookieStart, cookieEnd;
    if (document.cookie.length > 0) {
      cookieStart = document.cookie.indexOf(cookieName + "=");
      if (cookieStart !== -1) {
        cookieStart = cookieStart + cookieName.length + 1;
        cookieEnd = document.cookie.indexOf(";", cookieStart);
        if (cookieEnd === -1) {
          cookieEnd = document.cookie.length;
        }
        return unescape(document.cookie.substring(cookieStart, cookieEnd));
      }
    }
    return "";
  }

  const init = () => {
    const sessionCookie = getCookie(cookieName);
    if (sessionCookie || sessionCookie !== "") {
      setSessionToken(sessionCookie);
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, sessionToken, getLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
