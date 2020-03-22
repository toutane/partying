import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const SettingsCard = props => {
  return (
    <View style={{ marginTop: 40 }}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Appearance")}
        activeOpacity={0.5}
        style={{
          borderTopLeftRadius: 13,
          borderTopRightRadius: 13,
          backgroundColor:
            props.theme.theme !== "light" ? props.theme.gray6 : "white",
          paddingHorizontal: 20,
          paddingVertical: 15
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row"
          }}
        >
          <Text
            style={{
              color: props.theme.fontColor,
              fontSize: 17,
              fontFamily: "sf-text-regular"
            }}
          >
            Appearance
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: props.theme.gray4,
                fontSize: 17,
                fontFamily: "sf-text-regular"
              }}
            >
              {props.theme.theme.charAt(0).toUpperCase() +
                props.theme.theme.slice(1)}{" "}
            </Text>
            <Ionicons
              style={{ marginLeft: 5 }}
              name="ios-arrow-forward"
              size={20}
              color={props.theme.gray4}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
