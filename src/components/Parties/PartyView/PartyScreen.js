import React from "react";
import { Animated, View } from "react-native";

import { TopView } from "./Top/TopView";
import { HeaderView } from "./Header/HeaderView";
import { MiddleView } from "./Middle/MiddleView";

export default function PartyScreen(props) {
  return (
    <View style={{ marginBottom: 100 }}>
      <HeaderView {...props} />
      <TopView {...props} />
      <MiddleView {...props} />
    </View>
  );
}
