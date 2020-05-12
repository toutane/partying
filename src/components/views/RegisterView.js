import React, { useState, useContext } from "react";
import { View, Keyboard, TouchableOpacity, ScrollView } from "react-native";
import { SvgXml } from "react-native-svg";

import { ThemeContext } from "../../contexts/ThemeContext";

import Title from "../OnBoarding/CreateAccount/Title";
import SignUpCard from "../OnBoarding/CreateAccount/SignUpCard";

import { undraw_festivities } from "../../../assets/svg/undraw_festivities";
import { fireworks_city_party_dark } from "../../../assets/svg/fireworks_city_party_dark";

export default RegisterView = (props) => {
  const { theme } = useContext(ThemeContext);
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
      <SignUpCard {...props} theme={theme} />
    </TouchableOpacity>
  );
};
