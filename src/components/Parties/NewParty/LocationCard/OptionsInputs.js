import React from "react";
import { View } from "react-native";
import { EntryInputs } from "./EntryInputs";

export const OptionsInputs = (props) => {
  return (
    <View style={{ paddingHorizontal: 25, paddingVertical: 15 }}>
      <EntryInputs {...props} />
    </View>
  );
};
