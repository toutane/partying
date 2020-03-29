import React from "react";
import { View, Text } from "react-native";

export const Version = props => {
  return (
    <View style={{ alignItems: "center", marginTop: 15 }}>
      <Text
        style={{
          fontFamily: "sf-text-regular",
          color: props.theme.gray,
          fontSize: 13
        }}
      >
        Partying app Version 0.1
      </Text>
    </View>
  );
};
