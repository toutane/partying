import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { TouchableOpacity } from "./styles";

export const BackButton = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => props.navigation.pop()}
      {...props}
    >
      <Ionicons
        name="ios-arrow-round-up"
        size={35}
        color={props.theme.fontColor}
      />
    </TouchableOpacity>
  );
};
