import React, { useState, useContext, useRef } from "react";
import { View, Keyboard, TouchableOpacity, ScrollView } from "react-native";
import { SvgXml } from "react-native-svg";

import { AuthContext } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";

import Title from "../OnBoarding/CreateAccount/Title";
import SignUpCard from "../OnBoarding/CreateAccount/SignUpCard";

import { undraw_festivities } from "../../../assets/svg/undraw_festivities";
import { fireworks_city_party_dark } from "../../../assets/svg/fireworks_city_party_dark";

export default RegisterView = (props) => {
  const { theme } = useContext(ThemeContext);
  const { register } = useContext(AuthContext);

  const [error, setError] = useState("null");

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onRegister() {
    if (email && username && password !== "") {
      register(username, email, password).catch((error) =>
        error.code === "auth/invalid-email"
          ? setError("Email is badly formatted.")
          : error.code === "auth/weak-password"
          ? setError("Password should be at least 6 characters.")
          : error.code === "auth/email-already-in-use"
          ? setError("Email already in use, please change.")
          : alert(error.code)
      );
    }
    email === "" ? setError("You must complete all field !") : null;
    username === "" ? setError("You must complete all field !") : null;
    password === "" ? setError("You must complete all field !") : null;
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
          xml={undraw_festivities}
          width="230%"
          height="120%"
          style={{ position: "absolute", left: -200 }}
        />
      ) : (
        <SvgXml
          xml={fireworks_city_party_dark}
          width="230%"
          height="120%"
          style={{ position: "absolute", left: -200 }}
        />
      )}
      <SignUpCard
        {...props}
        theme={theme}
        error={error}
        setError={setError}
        setEmail={setEmail}
        setUsername={setUsername}
        setPassword={setPassword}
        register={onRegister}
      />
    </TouchableOpacity>
  );
};
