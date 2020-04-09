import React, { useState } from "react";
import { Animated, View } from "react-native";

import HeaderView from "./Header/HeaderView";
import { NameCard } from "./NameCard/NameCard";
import { TimesCard } from "./TimesCard/TimesCard";
import { LocationCard } from "./LocationCard/LocationCard";
import { ParticipantsCard } from "./ParticipantsCard/ParticipantsCard";

export default function NewPartyScreen(props) {
  return (
    <View style={{ backgroundColor: props.theme.backgroundColor }}>
      <HeaderView {...props} />
      <NameCard {...props} />
      <ParticipantsCard {...props} />
      <TimesCard {...props} />
      <LocationCard {...props} />
    </View>
  );
}
