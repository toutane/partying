import React from "react";
import { Animated, View, Text, Image } from "react-native";
import { Avatar } from "./Avatar";
import { OptionsBar } from "./OptionsBar/OptionsBar";
import { NumbersBar } from "./NumbersBar/NumbersBar";
import { TopViewCard } from "./styles";

export const HeaderView = (props) => {
  return (
    <TopViewCard {...props}>
      <Animated.View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar uri={props.user.avatar} />
        <View
          style={{ flexDirection: "column", flexShrink: 1, marginLeft: 15 }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: "sf-display-bold",
              color: props.theme.fontColor,
            }}
            numberOfLines={1}
          >
            {props.user.name}
          </Text>
          <Text
            style={{
              marginTop: 5,
              marginRight: 15,
              fontSize: 15,
              fontFamily: "sf-text-regular",
              color: props.theme.gray,
              textAlign: "justify",
            }}
            numberOfLines={3}
          >
            {props.user.bio}
          </Text>
        </View>
      </Animated.View>
      <NumbersBar {...props} />
      {/* <OptionsBar {...props} /> */}
    </TopViewCard>
  );
};
