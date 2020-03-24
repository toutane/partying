import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ToggleButton } from "../../ToggleButton/ToggleButton";

export const LightItem = props => {
  return (
    <TouchableOpacity
      onPress={() => props.setThemeState("light")}
      activeOpacity={0.5}
      style={{
        backgroundColor:
          props.theme.theme !== "light" ? props.theme.gray6 : "white"
      }}
    >
      <View>
        <View
          style={{
            borderColor: props.theme.gray5,
            borderWidth: 0.4,
            marginLeft: 20
          }}
        />
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 20,
            justifyContent: "space-between",
            flexDirection: "row"
          }}
        >
          <Text
            style={{
              color: props.theme.fontColor,
              fontSize: 17,
              fontFamily: "sf-text-regular"
            }}
          >
            Light
          </Text>
          <View style={{ flexDirection: "row" }}>
            <ToggleButton
              backgroundColor={
                props.theme.theme !== "light" ? props.theme.gray6 : "white"
              }
              {...props}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
