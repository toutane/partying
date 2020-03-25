import React from "react";
import { View, TouchableOpacity, Text, Linking } from "react-native";

export const DisabledView = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => Linking.openURL("app-settings:")}
        activeOpacity={0.5}
        style={{
          borderRadius: 13,
          backgroundColor:
            props.theme.theme !== "light" ? props.theme.gray6 : "white",
          paddingHorizontal: 20,
          paddingVertical: 15,
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: props.theme.green,
            fontSize: 17,
            fontFamily: "sf-text-regular"
          }}
        >
          Open Settings.app
        </Text>
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
        <Text
          style={{
            fontFamily: "sf-text-regular",
            fontSize: 13,
            color: props.theme.gray
          }}
        >
          Push notifications for this device are currently disabled. To continue
          receiving push notifications, allow notifications for Partying in the
          Settings app.
        </Text>
      </View>
    </View>
  );
};
