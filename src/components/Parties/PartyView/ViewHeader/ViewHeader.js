import React, { useContext } from "react";
import { Animated, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { LeftView } from "./LeftView";

export const ViewHeader = props => {
  return (
    <Animated.View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        opacity: props.titleOpacity
      }}
    >
      <LeftView {...props} />
      <TouchableOpacity
        style={{
          height: 45,
          width: 45,
          borderRadius: 13,
          backgroundColor: "rgba(0, 0, 0, 0.04)",
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={() => props.navigation.pop()}
      >
        <Ionicons name="ios-arrow-round-up" size={35} color="black" />
      </TouchableOpacity>
    </Animated.View>
  );
};
