import React from "react";
import { View, Text } from "react-native";

export default function BadgeRequestsSent(props) {
  return (
    <View
      style={{
        top: 1,
        marginLeft: 10,
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: props.theme.light_purple,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: props.theme.purple,
          fontSize: 15,
          fontFamily: "sf-text-bold",
        }}
      >
        {props.number}
      </Text>
    </View>
  );
}
