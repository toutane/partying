import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function AddFriendsButton(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        backgroundColor: props.theme.green,
        shadowOpacity: 0.03,
        shadowRadius: 20,
        shadowColor: props.theme.fontColor,
        paddingVertical: 17.5,
        paddingHorizontal: 20,
        borderRadius: 17,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Feather name="user-plus" size={20} color="white" />
        <Text
          style={{
            marginLeft: 10,
            color: "white",
            fontSize: 17,
            fontFamily: "sf-text-semibold",
          }}
        >
          Add friend
        </Text>
      </View>
      <Ionicons
        style={{ marginLeft: 5 }}
        name="ios-arrow-forward"
        size={20}
        color={"white"}
      />
    </TouchableOpacity>
  );
}
