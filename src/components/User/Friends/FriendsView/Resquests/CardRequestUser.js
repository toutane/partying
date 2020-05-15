import React from "react";
import { Image, TouchableOpacity, Text, View } from "react-native";
import ButtonsRequestUser from "./ButtonsRequestUser";

const moment = require("moment");

export default function CardRequestUser(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        backgroundColor:
          props.theme.theme !== "light" ? props.theme.gray6 : "white",
        shadowOpacity: 0.15,
        shadowRadius: 5,
        shadowOffset: {
          width: 1,
          height: 5,
        },
        shadowColor: "black",
        borderRadius: 17,
        width: 110,
        height: 150,
        marginLeft: props.index > 0 ? 20 : 0,
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
      }}
    >
      <Image
        style={{ borderRadius: 13, height: 45, width: 45 }}
        source={{
          uri: props.user.avatar,
        }}
      />
      <Text
        style={{
          paddingHorizontal: 5,
          textAlign: "center",
          color: props.theme.fontColor,
          fontFamily: "sf-text-semibold",
          fontSize: 14,
        }}
      >
        {props.user.username}
      </Text>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color: props.theme.gray,
            fontFamily: "sf-text-medium",
            fontSize: 11,
            marginBottom: 5,
          }}
        >
          {moment(props.user.request_date).startOf("min").fromNow()}{" "}
        </Text>
        <ButtonsRequestUser {...props} />
      </View>
    </TouchableOpacity>
  );
}
