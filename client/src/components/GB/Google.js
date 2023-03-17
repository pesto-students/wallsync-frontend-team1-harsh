import { GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";

import { useGoogleOneTapLogin } from "@react-oauth/google";

import jwt_decode from "jwt-decode";

const GoogleB = () => {
  const [user, setUser] = useState({});

  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      const data = jwt_decode(credentialResponse.credential);
      setUser(data);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const data = jwt_decode(credentialResponse.credential);
          setUser(data);
        }}
        useOneTap
      />
    </div>
  );
};
export default GoogleB;
