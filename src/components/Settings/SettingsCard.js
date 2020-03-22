import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { AppearanceItem } from "./Appearance/AppearanceItem";
import { PushNotificationsItem } from "./PushNotifications/PushNotificationsItem";

export const SettingsCard = props => {
  return (
    <View style={{ marginTop: 40 }}>
      <AppearanceItem {...props} />
      <PushNotificationsItem {...props} />
    </View>
  );
};
