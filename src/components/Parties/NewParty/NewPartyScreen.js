import React, { useState } from "react";
import { Animated, View } from "react-native";

import { HeaderView } from "./Header/HeaderView";
import { MiddleView } from "./Middle/MiddleView";
import { NameCard } from "./NameCard/NameCard";
import { TimesCard } from "./TimesCard/TimesCard";

export default function NewPartyScreen(props) {
  return (
    <View>
      {/* <HeaderView {...props} /> */}
      {/* <MiddleView {...props} /> */}
      <NameCard {...props} />
      <TimesCard {...props} />
    </View>
  );
}
