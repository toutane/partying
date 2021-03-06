import React from "react";
import { ScrollView } from "react-native";
import { screenHeight } from "../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";
import { SettingsCard } from "./SettingsCard";
import { SignOutButton } from "./SignOut/SignOutButton";
import { Version } from "./Version";
import { FeedbackButton } from "./Feedback/FeedbackButton";

export const SettingsScroll = (props) => {
  return (
    <ScrollView
      style={{
        height: screenHeight,
        marginTop: 46 + useSafeArea().top,
        paddingHorizontal: 25,
      }}
    >
      <SettingsCard {...props} />
      <FeedbackButton {...props} />
      <SignOutButton {...props} />
      <Version {...props} />
    </ScrollView>
  );
};
