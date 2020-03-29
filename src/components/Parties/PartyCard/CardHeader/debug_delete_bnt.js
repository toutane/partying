import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { PartyContext } from "../../../../contexts/PartyContext";

export const Debug_delete_button = props => {
  const { deleteParty } = useContext(PartyContext);
  return (
    <TouchableOpacity
      style={{ height: 30, width: 30 }}
      onLongPress={() => deleteParty(props.party.party_id)}
    >
      <Feather
        color={
          props.theme.theme === "light" ? props.theme.gray6 : props.theme.gray7
        }
        size={25}
        name="x"
      />
    </TouchableOpacity>
  );
};
