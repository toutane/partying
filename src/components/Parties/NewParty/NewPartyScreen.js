import React, { useState } from "react";
import { Animated, View } from "react-native";

import { HeaderView } from "./Header/HeaderView";
import { MiddleView } from "./Middle/MiddleView";

export default function NewPartyScreen(props) {
  return (
    <View style={{ marginBottom: 100 }}>
      {/* <HeaderView {...props} /> */}
      <MiddleView {...props} />
    </View>
  );
}
