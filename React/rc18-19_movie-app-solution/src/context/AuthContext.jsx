import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { userObserver } from "../firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrenUser] = useState(false);

  useEffect(() => {
    // setCurrenUser(JSON.parse(sessionStorage.getItem("user")));

    userObserver(setCurrenUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
