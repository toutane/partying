import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { ToggleButton } from "../../ToggleButton/ToggleButton";

export const AutomaticItem = props => {
  return (
    <TouchableOpacity
      onPress={() => props.setThemeState("automatic")}
      activeOpacity={0.5}
      style={{
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        backgroundColor:
          props.theme.theme !== "light" ? props.theme.gray6 : "white",
        paddingHorizontal: 20,
        paddingVertical: 15
      }}
    >
      <View
        style={{
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
          Automatic
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
    </TouchableOpacity>
  );
};
