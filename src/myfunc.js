import React, { useState } from "react";

import { createContext } from "react";

import MyName from "./myname";

export const MyContext = createContext();

function MyFunc() {
  const [username, setUserName] = useState({ myname: "hi nandish" });

  return (
    <MyContext.Provider value={{ username }}>
      <h1>my name is </h1>
      <MyName />
    </MyContext.Provider>
  );
}

export default MyFunc;
