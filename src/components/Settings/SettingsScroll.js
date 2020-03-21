import React from "react";
import { ScrollView, TouchableOpacity, Text, Button } from "react-native";
import { screenHeight } from "../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";
import { SettingsCard } from "./SettingsCard";

export const SettingsScroll = props => {
  return (
    <ScrollView
      style={{
        height: screenHeight,
        marginTop: 46 + useSafeArea().top,
        paddingHorizontal: 25
      }}
    >
      <SettingsCard {...props} />
      {/* <Button
        title="Go to appearance"
        onPress={() => props.navigation.navigate("Appearance")}
      /> */}
    </ScrollView>
  );
};
