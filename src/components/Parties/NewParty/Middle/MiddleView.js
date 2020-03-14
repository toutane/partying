import React from "react";
import { View, Text } from "react-native";
import { MiddleInputs } from "./MiddleInputs";

export const MiddleView = props => {
  return (
    <View style={{ paddingHorizontal: 25, marginTop: 30 }}>
      <MiddleInputs {...props} />
    </View>
  );
};
