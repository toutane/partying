import React, { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import uuid from "uuid";

import { CreatePartyContext } from "../../../../contexts/CreatePartyContext";

export const CreateButton = props => {
  const { canContinue, createParty } = useContext(CreatePartyContext);
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        flexDirection: "row",
        backgroundColor: canContinue
          ? "#fead01"
          : props.theme.theme === "light"
          ? "white"
          : props.theme.gray6,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        paddingHorizontal: 5,
        height: 35,
        marginRight: 20
      }}
      onPress={() => canContinue && createParty(uuid.v4(), props)}
    >
      <Text
        style={{
          marginLeft: 5,
          color: canContinue ? "white" : props.theme.gray,
          fontSize: 17,
          fontFamily: "sf-text-medium"
        }}
      >
        Continue
      </Text>
      <Feather
        name="arrow-right"
        size={25}
        color={canContinue ? "white" : props.theme.gray}
      />
    </TouchableOpacity>
  );
};

{
  /* <TouchableOpacity
  style={{
    width: 35,
    borderRadius: 10,
    backgroundColor: theme.gray5,
    alignItems: "center"
  }}
  onPress={() => props.navigation.pop()}
>
  <Ionicons
    name="ios-arrow-round-back"
    size={30}
    style={{ top: 2 }}
    color={theme.fontColor}
  />
</TouchableOpacity>; */
}
