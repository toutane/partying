import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "../../../Card/styles";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { Feather } from "@expo/vector-icons";
import { screenWidth } from "../../../../utils/dimensions";

export const AddFriendsCard = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
      <TouchableOpacity
        // onPress={() => Linking.openURL("app-settings:")}
        activeOpacity={0.5}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <TouchableOpacity
          style={{
            paddingVertical: 7.5,
            backgroundColor: theme.green,
            alignItems: "center",
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: theme.backgroundColor,
              fontFamily: "sf-display-medium",
              fontSize: 17,
            }}
          >
            Discover People
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};
