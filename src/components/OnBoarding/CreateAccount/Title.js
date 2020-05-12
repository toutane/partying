import React from "react";
import { View, Text } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

export default function Title(props) {
  return (
    <View style={{ flex: 1, top: useSafeArea().top + 46 }}>
      {/* <Text
        style={{
          fontSize: 28,
          fontFamily: "sf-display-bold",
          color: props.theme.fontColor,
        }}
      >
        Sign Up to Partying
      </Text> */}
    </View>
  );
}
