import React, { useContext } from "react";
import { Animated, View, TouchableOpacity } from "react-native";

import { LeftView } from "./LeftView";
import { BackButton } from "../../../BackButton/BackButton";

export const HeaderView = props => {
  return (
    <Animated.View
      style={{
        zIndex: 1,
        backgroundColor:
          props.theme.theme !== "light" ? props.theme.gray6 : "white",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25
      }}
    >
      <LeftView {...props} />
      <BackButton {...props} isWhiteBackground={true} />
    </Animated.View>
  );
};
