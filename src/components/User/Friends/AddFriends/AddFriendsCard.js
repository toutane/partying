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
          borderRadius: 13,
          backgroundColor: theme.theme !== "light" ? theme.gray5 : "white",
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <Text
          style={{
            color: theme.gray3,
            fontSize: 17,
            fontFamily: "sf-display-semibold",
          }}
        >
          This place seems a little empty...
        </Text>
        <Text
          style={{
            marginTop: 15,
            fontSize: 21,
            color: theme.fontColor,
            fontFamily: "sf-display-semibold",
          }}
        >
          Invite a friend to join Partying or add one already registered :
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              width: (screenWidth - 110) / 2,
              paddingVertical: 5,
              backgroundColor: theme.green,
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                color: theme.backgroundColor,
                fontFamily: "sf-display-semibold",
                fontSize: 17,
              }}
            >
              Invite a friend
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: (screenWidth - 110) / 2,
              paddingHorizontal: 20,
              paddingVertical: 5,
              backgroundColor: theme.green,
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                color: theme.backgroundColor,
                fontFamily: "sf-display-semibold",
                fontSize: 17,
              }}
            >
              Add a friend
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};
