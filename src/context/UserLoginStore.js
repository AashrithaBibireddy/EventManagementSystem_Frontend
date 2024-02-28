import React, { useState } from "react";
import axios from "axios";
import { loginContext } from "./loginContext";
function UserLoginStore({ children }) {
  let [currentUser, setCurrentUser] = useState({});
  let [logErr, setlogErr] = useState("");
  const [userLoginStatus, setUserLoginStatus] = useState(false);
  //func to make user login request
  const loginUser = (userCredentialsObj) => {
    axios
      .post("http://localhost:3500/user-api/signin", userCredentialsObj)
      .then((response) => {
        if (response.data.Message === "success") {
          localStorage.setItem("token", response.data.token);
          setCurrentUser({ ...response.data.user });
          setlogErr("");
          setUserLoginStatus(true);
        } else {
          setlogErr(response.data.Message);
        }
      })
      .catch((err) => {
        setlogErr(err.Message);
      });
  };
  const logOutUser = () => {
    //bcoz once he logs out the token shd b deleted
    localStorage.clear();
    setUserLoginStatus(false);
  };
  return (
    <loginContext.Provider
      value={[currentUser, logErr, userLoginStatus, loginUser, logOutUser]}
    >
      {children}
    </loginContext.Provider>
  );
}

export default UserLoginStore;
