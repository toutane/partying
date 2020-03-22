import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const PushNotificationsItem = props => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("Appearance")}
      activeOpacity={0.5}
      style={{
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 13,
        backgroundColor:
          props.theme.theme !== "light" ? props.theme.gray6 : "white"
      }}
    >
      <View>
        <View
          style={{
            borderColor: props.theme.gray5,
            borderWidth: 0.4,
            marginLeft: 20
          }}
        />
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 20,
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
            Push notifications
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: props.theme.gray4,
                fontSize: 17,
                fontFamily: "sf-text-regular"
              }}
            >
              Disabled
            </Text>
            <Ionicons
              style={{ marginLeft: 5 }}
              name="ios-arrow-forward"
              size={20}
              color={props.theme.gray4}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
