import React from "react";
import { View, Text } from "react-native";

export const CardContent = props => {
  return (
    <View style={{ marginTop: 20, marginBottom: 15 }}>
      <Text
        style={{
          fontFamily: "sf-text-regular",
          fontSize: 15,
          color: props.theme.fontColor,
          lineHeight: 30,
          textAlign: "justify"
        }}
        numberOfLines={3}
      >
        {props.party.description}
      </Text>
    </View>
  );
};
