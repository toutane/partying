import React, { useContext } from "react";
import { View } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import { MyPartiesScrollView } from "./Parties/MyParties/MyPartiesScrollView";

import { UserContext } from "../../../../contexts/UserContext";

export default function AccountScreen(props) {
  const { currentUserParties } = useContext(UserContext);
  return (
    <View
      style={{
        marginTop: useSafeArea().top - 14,
        marginBottom: 300
      }}
    >
      <MyPartiesScrollView {...props} parties={currentUserParties} />
    </View>
  );
}
