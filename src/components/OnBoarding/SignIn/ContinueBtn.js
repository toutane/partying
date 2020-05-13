import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ContinueBtn(props) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.login}>
      <LinearGradient
        colors={["rgb(52, 199, 89)", "rgb(52, 180, 69)"]}
        start={[0, 1]}
        end={[1, 0]}
        style={{
          marginTop: 20,
          padding: 15,
          alignItems: "center",
          borderRadius: 13,
        }}
      >
        <Text
          style={{
            backgroundColor: "transparent",
            fontSize: 15,
            fontFamily: "sf-text-bold",
            color:
              props.theme.theme === "light"
                ? "white"
                : props.theme.backgroundColor,
          }}
        >
          START USING PARTYING
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
