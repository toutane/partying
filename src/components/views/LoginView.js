import React, { useState, useContext } from "react";
import { Keyboard, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";

import { AuthContext } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";

import Title from "../OnBoarding/CreateAccount/Title";
import SignInCard from "../OnBoarding/SignIn/SignInCard";

import { ballon_girl_light } from "../../../assets/svg/ballon_girl_light";
import { ballon_girl_dark } from "../../../assets/svg/ballon_girl_dark";

export default LoginView = (props) => {
  const { theme } = useContext(ThemeContext);
  const { login } = useContext(AuthContext);

  const [error, setError] = useState("null");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onLogin() {
    if (email && password !== "") {
      login(email, password).catch((error) =>
        error.code === "auth/invalid-email"
          ? setError("Email is badly formatted.")
          : error.code === "auth/weak-password"
          ? setError("Password should be at least 6 characters.")
          : error.code === "auth/email-already-in-use"
          ? setError("Email already in use, please change.")
          : error.code === "auth/user-not-found"
          ? setError("Sorry credentials don't match.")
          : error.code === "auth/wrong-password"
          ? setError("Sorry credentials don't match.")
          : alert(error.code)
      );
    }
    email === "" ? setError("Please complete all fields.") : null;
    password === "" ? setError("Please complete all fields.") : null;
  }
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        flex: 1,
        backgroundColor: theme.backgroundColor,
        alignItems: "center",
      }}
      onPress={Keyboard.dismiss}
    >
      <Title {...props} theme={theme} />
      {theme.theme === "light" ? (
        <SvgXml
          xml={ballon_girl_light}
          width="230%"
          height="110%"
          style={{ position: "absolute", left: -30 }}
        />
      ) : (
        <SvgXml
          xml={ballon_girl_dark}
          width="230%"
          height="110%"
          style={{ position: "absolute", left: -30 }}
        />
      )}
      <SignInCard
        {...props}
        theme={theme}
        error={error}
        setError={setError}
        setEmail={setEmail}
        setPassword={setPassword}
        login={onLogin}
      />
    </TouchableOpacity>
  );
};
