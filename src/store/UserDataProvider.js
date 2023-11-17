'use client'

import React, { createContext, useState } from "react";

export const UserData = createContext();

export default function UserDataProvider({ children }) {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <UserData.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </UserData.Provider>
  );
}
