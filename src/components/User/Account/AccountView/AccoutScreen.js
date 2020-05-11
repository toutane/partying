import React, { useContext } from "react";
import { View } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import { MyPartiesScrollView } from "./Parties/MyParties/MyPartiesScrollView";

import { UserContext } from "../../../../contexts/UserContext";
import { screenHeight } from "../../../../utils/dimensions";

export default function AccountScreen(props) {
  const { currentUserParties } = useContext(UserContext);
  return (
    <View
      style={{
        marginTop: useSafeArea().top - 14,
        marginBottom: screenHeight - 130,
      }}
    >
      {currentUserParties.length > 0 && (
        <MyPartiesScrollView {...props} parties={currentUserParties} />
      )}
    </View>
  );
}
