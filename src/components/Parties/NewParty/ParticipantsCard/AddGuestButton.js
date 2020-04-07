import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export const AddGuestButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
      }}
      onPress={() =>
        props.navigation.navigate("GuestsListView", { user: props.user })
      }
    >
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          borderRadius: 13,
          backgroundColor: "#fead01",
          width: 45,
          height: 45,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() =>
          props.navigation.navigate("GuestsListView", { user: props.user })
        }
      >
        <Feather name="plus" size={25} color="white" />
      </TouchableOpacity>
      <Text
        style={{
          marginLeft: 15,
          fontFamily: "sf-text-semibold",
          color: "#fead01",
          fontSize: 17,
        }}
      >
        Add participants
      </Text>
    </TouchableOpacity>
  );
};
