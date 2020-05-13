import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import { useSafeArea } from "react-native-safe-area-context";

import { alone_boy_light } from "../../../../assets/svg/alone_boy_light";

export default function EmptyView(props) {
  return (
    <View style={{ alignItems: "center" }}>
      <SvgXml
        xml={alone_boy_light}
        width="200%"
        height="400%"
        style={{
          position: "absolute",
          left: -250,
          bottom: -20,
        }}
      />
      <Text
        style={{
          fontSize: 15,
          fontFamily: "sf-text-medium",
          color: props.theme.gray2,
        }}
      >
        This place seems to be empty...
      </Text>
      <TouchableOpacity activeOpacity={0.8} onPress={props.login}>
        <LinearGradient
          colors={["rgb(52, 199, 89)", "rgb(52, 180, 69)"]}
          start={[0, 1]}
          end={[1, 0]}
          style={{
            marginTop: 65,
            paddingHorizontal: 20,
            paddingVertical: 12.5,
            alignItems: "center",
            borderRadius: 13,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Feather
            style={{ marginRight: 7.5 }}
            name="user-plus"
            size={20}
            color={props.theme.backgroundColor}
          />
          <Text
            style={{
              backgroundColor: "transparent",
              fontSize: 15,
              fontFamily: "sf-text-bold",
              color:
                props.theme.theme === "light"
                  ? "white"
                  : props.theme.backgroundColor,
            }}
          >
            FIND FRIENDS
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
