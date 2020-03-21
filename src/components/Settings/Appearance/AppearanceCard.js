import React from "react";
import { ScrollView, Button } from "react-native";
import { screenHeight } from "../../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";

export const AppearanceCard = props => {
  return (
    <ScrollView
      style={{
        height: screenHeight,
        marginTop: 46 + useSafeArea().top
      }}
    >
      <Button title="Switch theme" onPress={() => props.switchTheme()} />
    </ScrollView>
  );
};
