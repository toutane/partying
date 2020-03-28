import React, { useContext } from "react";
import { View, Text, Switch } from "react-native";

import { CreatePartyContext } from "../../../../contexts/CreatePartyContext";

export const SeveralDays = props => {
  const { severalDays, setSeveralDays } = useContext(CreatePartyContext);

  const toggleSwitch = () => setSeveralDays(previousState => !previousState);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
      }}
    >
      <Text
        style={{
          color: props.theme.fontColor,
          fontSize: 17,
          fontFamily: "sf-text-medium"
        }}
      >
        Several days ?
      </Text>
      <Switch onValueChange={toggleSwitch} value={severalDays} />
    </View>
  );
};
