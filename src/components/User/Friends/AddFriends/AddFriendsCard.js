import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "../../../Card/styles";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { Feather } from "@expo/vector-icons";

export const AddFriendsCard = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={{ marginTop: 15, paddingHorizontal: 110, paddingVertical: 20 }}
    >
      <TouchableOpacity
        // onPress={() => Linking.openURL("app-settings:")}
        activeOpacity={0.5}
        style={{
          borderRadius: 13,
          backgroundColor: theme.theme !== "light" ? theme.gray5 : "white",
          paddingHorizontal: 20,
          paddingVertical: 15,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            marginRight: 10,
            color: theme.green,
            fontSize: 17,
            fontFamily: "sf-text-regular",
          }}
        >
          Add friends
        </Text>
        <Feather
          color={theme.green}
          size={20}
          name="user-plus"
          style={{ top: -1 }}
        />
      </TouchableOpacity>
    </View>
  );
};
