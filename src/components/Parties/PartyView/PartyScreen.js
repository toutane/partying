import React from "react";
import { Animated, View } from "react-native";

import { TopView } from "./Top/TopView";
import { HeaderView } from "./Top/Header/HeaderView";

export default function PartyScreen(props) {
  return (
    <View>
      {/* <View
        style={{
          backgroundColor:
            props.theme.theme !== "light" ? props.theme.gray6 : "white"
        }}
      >
        <Animated.View
          style={{
            opacity: props.titleOpacity,
            backgroundColor:
              props.theme.theme !== "light" ? props.theme.gray6 : "white",
            height: 10
          }}
        /> */}
      <HeaderView {...props} />
      {/* </View> */}
      <TopView {...props} />
    </View>
  );
}
