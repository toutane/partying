import React from "react";
import { View } from "react-native";

import { ViewHeader } from "./ViewHeader/ViewHeader";

export default function PartyCard(props) {
  return (
    <View>
      <ViewHeader {...props} />
    </View>
  );
}
