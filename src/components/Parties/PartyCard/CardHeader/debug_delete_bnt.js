import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { CreatePartyContext } from "../../../../contexts/CreatePartyContext";

export const Debug_delete_button = props => {
  const { deleteParty } = useContext(CreatePartyContext);
  return (
    <TouchableOpacity
      style={{ height: 30, width: 30 }}
      onPress={() => deleteParty(props.party.party_id)}
    >
      <Feather color={props.theme.gray6} size={25} name="x" />
    </TouchableOpacity>
  );
};
