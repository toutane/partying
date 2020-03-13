import React from "react";
import { Animated, View, Text } from "react-native";
import { Hr } from "../../hr";
import { Avatar } from "./Avatar";

export const HeaderView = props => {
  return (
    <View style={{ paddingHorizontal: 25 }}>
      <Animated.View
        style={{
          opacity: props.titleOpacity,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <View style={{ width: "80%" }}>
          <Text
            style={{
              fontSize: 34,
              fontFamily: "sf-display-bold",
              color: props.theme.fontColor
            }}
          >
            {props.user.username}
          </Text>
          <Text
            style={{
              marginTop: 5,
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
      <Hr {...props} style={{ marginTop: 20 }} />
    </View>
  );
};
