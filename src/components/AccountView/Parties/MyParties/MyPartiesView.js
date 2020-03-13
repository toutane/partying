import React from "react";
import { View, ScrollView, Text } from "react-native";

export const MyPartiesView = props => {
  return (
    <View>
      <Text
        style={{
          color: props.theme.fontColor,
          fontSize: 17,
          fontFamily: "sf-text-bold"
        }}
      >
        Your parties
      </Text>
    </View>
  );
};
