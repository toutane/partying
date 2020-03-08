import React from "react";
import { Animated, View } from "react-native";

import { TopView } from "./Top/TopView";
import { HeaderView } from "./Header/HeaderView";

export default function PartyScreen(props) {
  return (
    <View>
      <HeaderView {...props} />
      <TopView {...props} />
    </View>
  );
}
