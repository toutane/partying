import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Icon from "react-native-feather1s";

export const Item = props => {
  const [showed, setShowed] = useState("start");
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: props.extd ? "100%" : "33%"
        // backgroundColor: "red"
      }}
      onPress={() =>
        props.title === "Location"
          ? props.setExtd(!props.extd)
          : setShowed(showed === "start" ? "end" : "start")
      }
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
          numberOfLines={1}
        >
          {props.title === "Time"
            ? showed === "start"
              ? props.data.start.time
              : props.data.end.time
            : props.title === "Date"
            ? showed === "start"
              ? props.data.start.date
              : props.data.end.date
            : props.data}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
