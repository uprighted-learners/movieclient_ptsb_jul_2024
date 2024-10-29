import React from "react";

import Signup from "./Signup";
import Login from "./Login";

const Auth = ({ updateToken }) => {

  return (
    <div>
      <Signup updateToken={updateToken} />

      {/* //!Exercise - Complete Login   */}
      {/* <Login /> */}
    </div>
  );
};

export default Auth;
