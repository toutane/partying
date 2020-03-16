import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Icon from "react-native-feather1s";

const moment = require("moment");

export const Item = props => {
  const [showed, setShowed] = useState("start");
  return (
    <TouchableOpacity
      activeOpacity={0.6}
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
          numberOfLines={1}
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
              ? moment(props.data.start.time)
                  .format("LT")
                  .slice(0, -3)
              : moment(props.data.end.time)
                  .format("LT")
                  .slice(0, -3)
            : props.title === "Date"
            ? showed === "start"
              ? moment(props.data.start.date)
                  .format("L")
                  .slice(0, 5)
              : moment(props.data.end.date)
                  .format("L")
                  .slice(0, 5)
            : props.data}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
