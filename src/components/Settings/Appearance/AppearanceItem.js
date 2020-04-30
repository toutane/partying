import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const AppearanceItem = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("Appearance")}
      activeOpacity={0.5}
      style={{
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        backgroundColor:
          props.theme.theme !== "light" ? props.theme.gray6 : "white",
        paddingHorizontal: 20,
        paddingVertical: 17.5,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: props.theme.fontColor,
            fontSize: 17,
            fontFamily: "sf-text-regular",
          }}
        >
          Appearance
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: props.theme.gray4,
              fontSize: 17,
              fontFamily: "sf-text-regular",
            }}
          >
            {props.themeState.charAt(0).toUpperCase() +
              props.themeState.slice(1)}{" "}
          </Text>
          <Ionicons
            style={{ marginLeft: 5 }}
            name="ios-arrow-forward"
            size={20}
            color={props.theme.gray4}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
