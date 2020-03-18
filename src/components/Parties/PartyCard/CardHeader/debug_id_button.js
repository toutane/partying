import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export const Debug_id_button = props => {
  return (
    <TouchableOpacity
      style={{ height: 30, width: 30, marginRight: 5 }}
      onPress={() => alert(`ID : ${props.party.party_id}`)}
    >
      <Feather
        color={
          props.theme.theme === "light" ? props.theme.gray6 : props.theme.gray7
        }
        size={25}
        name="file-text"
      />
    </TouchableOpacity>
  );
};
