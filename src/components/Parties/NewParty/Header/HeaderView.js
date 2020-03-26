import React from "react";
import { View, Animated, TouchableOpacity, Text } from "react-native";
import { BlurView } from "expo-blur";
import { screenWidth } from "../../../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { CreateButton } from "./CreateButton";

export default HeaderView = props => {
  return (
    <View style={{ zIndex: 2, position: "absolute" }}>
      <Animated.View
        style={{
          zIndex: 2,
          position: "absolute",
          top: 0
        }}
      >
        <BlurView
          tint={props.theme.theme}
          intensity={100}
          style={{
            zIndex: 2,
            height: 46 + useSafeArea().top,
            width: screenWidth
          }}
        />
      </Animated.View>
      <Animated.View
        style={{
          zIndex: 3,
          height: 46 + useSafeArea().top,
          width: screenWidth,
          backgroundColor:
            props.isWhiteBackground !== undefined
              ? props.theme !== "light"
                ? props.theme.gray6
                : "white"
              : props.theme.backgroundColor,
          position: "absolute",
          top: 0,
          opacity: 0
        }}
      />
      <View
        style={{
          zIndex: 4,
          height: 46 + useSafeArea().top,
          width: screenWidth,
          alignItems: "center",
          justifyContent: "center",
          top: (useSafeArea().top - 4) / 2,
          flexDirection: "row"
        }}
      >
        <Animated.Text
          style={{
            fontSize: 17,
            fontFamily: "sf-text-semibold",
            color: props.theme.fontColor,
            opacity: 1
          }}
          numberOfLines={1}
        >
          New Party
        </Animated.Text>
        <View
          style={{
            right: 0,
            position: "absolute"
          }}
        >
          <CreateButton {...props} />
        </View>
      </View>
    </View>
  );
};
