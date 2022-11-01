import { useEffect, useState } from "react";
import AppRouter from "../router";

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userObj = {
    email: localStorage.getItem("email"),
    password: localStorage.getItem("password"),
    name: localStorage.getItem("name"),
    birth: localStorage.getItem("birth"),
    tel: localStorage.getItem("tel"),
    joinDate: localStorage.getItem("joinDate"),
  };
  useEffect(() => {
    if (userObj.name !== null) {
      setIsLoggedIn(!isLoggedIn);
    } else {
      setIsLoggedIn(isLoggedIn);
    }
  }, [setIsLoggedIn]);

  return <AppRouter userObj={userObj} isLoggedIn={isLoggedIn} />;
};

export default Auth;
