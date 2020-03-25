import React from "react";
import { View, Text } from "react-native";

export const DisabledView = props => {
  return (
    <View>
      <View
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
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
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
