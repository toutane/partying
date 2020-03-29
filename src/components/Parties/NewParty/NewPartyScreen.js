import React, { useState } from "react";
import { Animated, View } from "react-native";

import { HeaderView } from "./Header/HeaderView";
import { NameCard } from "./NameCard/NameCard";
import { TimesCard } from "./TimesCard/TimesCard";

export default function NewPartyScreen(props) {
  return (
    <View>
      {/* <HeaderView {...props} /> */}
      <NameCard {...props} />
      <TimesCard {...props} />
    </View>
  );
}
