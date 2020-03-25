import React, { useContext } from "react";
import { ScrollView, View } from "react-native";
import { screenHeight } from "../../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";

import { ThemeContext } from "../../../contexts/ThemeContext";
import { PushNotificationsContext } from "../../../contexts/PushNotificationsContext";

import FixeHeader from "../../Headers/FixeHeader";
import { DirectMentionsCard } from "./DirectMentionsCard";
import { DisabledView } from "./DisabledView";

export default PushNotificationsView = props => {
  const { theme } = useContext(ThemeContext);
  const { isPushNotifActive } = useContext(PushNotificationsContext);

  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      <ScrollView
        style={{
          height: screenHeight,
          marginTop: 46 + useSafeArea().top,
          paddingHorizontal: 25
        }}
      >
        <View style={{ marginTop: 40 }}>
          {isPushNotifActive ? (
            <DirectMentionsCard theme={theme} />
          ) : (
            <DisabledView theme={theme} />
          )}
        </View>
      </ScrollView>
      <FixeHeader title="Push Notifications" backView="Settings" {...props} />
    </View>
  );
};
