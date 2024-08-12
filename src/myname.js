import React, { useContext } from "react";

import { MyContext } from "./myfunc";

function MyName() {
  const { username } = useContext(MyContext);

  return <div>MyName is {username.myname}</div>;
}

export default MyName;
