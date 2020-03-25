import React, { useContext } from "react";
import { View, Text, Switch } from "react-native";

import { PushNotificationsContext } from "../../../contexts/PushNotificationsContext";

export const DirectMentionsCard = props => {
  const { isDirectMentionsActive, setIsDirectMentionsActive } = useContext(
    PushNotificationsContext
  );

  const toggleSwitch = () =>
    setIsDirectMentionsActive(previousState => !previousState);

  return (
    <View
      style={{
        borderRadius: 13,
        backgroundColor:
          props.theme.theme !== "light" ? props.theme.gray6 : "white",
        paddingHorizontal: 20,
        paddingVertical: 10
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: props.theme.fontColor,
            fontSize: 17,
            fontFamily: "sf-text-regular"
          }}
        >
          Direct Mentions
        </Text>
        <Switch onValueChange={toggleSwitch} value={isDirectMentionsActive} />
      </View>
    </View>
  );
};
