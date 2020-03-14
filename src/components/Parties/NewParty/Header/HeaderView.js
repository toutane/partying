import React, { useContext } from "react";
import { Animated, View, Text } from "react-native";

import { UserView } from "./UserView";
import { CreateButton } from "./CreateButton";

export const HeaderView = props => {
  return (
    <Animated.View
      style={{
        zIndex: 1,
        backgroundColor: props.theme.backgroundColor,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
        opacity: props.titleOpacity
      }}
    >
      <UserView {...props} />
      <CreateButton {...props} />
    </Animated.View>
  );
};
