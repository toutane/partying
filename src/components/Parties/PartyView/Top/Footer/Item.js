import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Icon from "react-native-feather1s";

export const Item = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: props.isFullWidth ? "100%" : "50%"
      }}
    >
      <Icon
        name={props.icon}
        size={30}
        color={props.theme.gray4}
        style={{ marginRight: 5 }}
      />
      <View style={{ flexDirection: "column", flex: 1 }}>
        <Text
          style={{
            fontFamily: "sf-text-medium",
            fontSize: 13,
            color: props.theme.gray4,
            marginBottom: 3
          }}
        >
          {props.title}
        </Text>
        <Text
          style={{
            fontFamily: "sf-text-semibold",
            fontSize: 15,
            color: props.theme.fontColor
          }}
          numberOfLines={2}
        >
          {props.data}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
