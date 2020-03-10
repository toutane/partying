import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useSafeArea } from "react-native-safe-area-context";

export default NotificationsView = props => {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.backgroundColor
      }}
    >
      <Text
        style={{
          position: "absolute",
          top: 46 + useSafeArea().top,
          left: 25,
          fontSize: 34,
          fontFamily: "sf-display-bold",
          color: theme.fontColor
        }}
      >
        Notifications
      </Text>
      <Text
        style={{
          fontFamily: "sf-display-medium",
          fontSize: 19,
          color: theme.gray
        }}
      >
        You don't have any notifications...
      </Text>
    </View>
  );
};
