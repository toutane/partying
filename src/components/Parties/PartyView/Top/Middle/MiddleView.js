import React from "react";
import { View, Text } from "react-native";

export const MiddleView = props => {
  return (
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      <Text
        style={{
          fontFamily: "sf-display-bold",
          fontSize: 35,
          color: props.theme.fontColor
        }}
        numberOfLines={1}
      >
        {props.party.name}
      </Text>
      <Text
        style={{
          marginTop: 20,
          fontFamily: "sf-text-regular",
          fontSize: 15,
          color: props.theme.fontColor,
          lineHeight: 30,
          textAlign: "justify"
        }}
      >
        {props.party.description}
      </Text>
    </View>
  );
};
