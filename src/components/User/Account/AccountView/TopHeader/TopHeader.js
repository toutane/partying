import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSafeArea } from "react-native-safe-area-context";

export const TopHeader = props => {
  return (
    <View
      style={{
        zIndex: 10,
        flexDirection: "row",
        position: "absolute",
        right: 0,
        top: useSafeArea().top + 5,
        paddingHorizontal: 20
      }}
    >
      <TouchableOpacity style={{ width: 30, height: 30 }}>
        <Feather name="edit" size={25} color={props.theme.green} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ width: 30, height: 30, marginLeft: 10 }}
        onPress={() => props.navigation.navigate("Settings")}
      >
        <Feather name="settings" size={25} color={props.theme.green} />
      </TouchableOpacity>
    </View>
  );
};
