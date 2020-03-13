import React from "react";
import { View } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import { MyPartiesView } from "./Parties/MyParties/MyPartiesView";

export default function AccountScreen(props) {
  return (
    <View
      style={{
        marginTop: useSafeArea().top - 14,
        marginBottom: 200,
        paddingHorizontal: 25
      }}
    >
      <MyPartiesView {...props} />
    </View>
  );
}
