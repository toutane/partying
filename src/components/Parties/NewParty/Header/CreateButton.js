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
        borderRadius: 100,
        paddingHorizontal: 15,
        height: 50
      }}
      onPress={() => canContinue && createParty(uuid.v4(), props)}
    >
      <Text
        style={{
          color: canContinue ? "white" : props.theme.gray,
          fontSize: 17,
          fontFamily: "sf-text-bold",
          flexShrink: 1
        }}
      >
        Continue{" "}
      </Text>
      <Feather
        name="arrow-right"
        size={25}
        color={canContinue ? "white" : props.theme.gray}
      />
    </TouchableOpacity>
  );
};
