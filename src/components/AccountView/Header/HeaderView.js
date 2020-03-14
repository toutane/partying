import React from "react";
import { screenWidth } from "../../../utils/dimensions";
import { Animated, View, Text, Image } from "react-native";
import { Avatar } from "./Avatar";

export const HeaderView = props => {
  return (
    <Animated.View
      style={{
        paddingHorizontal: 25,
        opacity: props.titleOpacity,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <View style={{ flexDirection: "column", flexShrink: 1 }}>
        <Text
          style={{
            fontSize: 34,
            fontFamily: "sf-display-bold",
            color: props.theme.fontColor
          }}
          numberOfLines={1}
        >
          {props.user.username}
        </Text>
        <Text
          style={{
            marginRight: 15,
            fontSize: 15,
            fontFamily: "sf-text-semibold",
            color: props.theme.gray,
            textAlign: "justify"
          }}
          numberOfLines={3}
        >
          {props.user.bio}
        </Text>
      </View>
      <Avatar uri={props.user.avatar} />
    </Animated.View>
  );
};
