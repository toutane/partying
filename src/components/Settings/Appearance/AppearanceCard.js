import React from "react";
import { ScrollView, View } from "react-native";
import { screenHeight } from "../../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";
import { LightItem } from "./LightItem";
import { DarkItem } from "./DarkItem";
import { AutomaticItem } from "./Automatic";

export const AppearanceCard = props => {
  return (
    <ScrollView
      style={{
        height: screenHeight,
        marginTop: 46 + useSafeArea().top,
        paddingHorizontal: 25
      }}
    >
      {/* <Button title="Switch theme" onPress={() => props.switchTheme()} /> */}
      <View style={{ marginTop: 40 }}>
        <AutomaticItem {...props} isActive={props.themeState === "automatic"} />
        <LightItem {...props} isActive={props.themeState === "light"} />
        <DarkItem {...props} isActive={props.themeState === "dark"} />
      </View>
    </ScrollView>
  );
};
