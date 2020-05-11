import React, { useContext } from "react";
import { View, Text, TextInput } from "react-native";
import { Item } from "./Item";
import { CreatePartyContext } from "../../../../contexts/CreatePartyContext";

export const EntryInputs = (props) => {
  const { entry_code, setEntry_code, interphone, setInterphone } = useContext(
    CreatePartyContext
  );
  return (
    <View style={{ flexDirection: "row" }}>
      <Item
        title="Entry code :"
        icon="key"
        data={entry_code}
        onChange={setEntry_code}
        keyboardType="default"
        {...props}
      />
      <Item
        title="Interphone :"
        icon="phone"
        data={interphone}
        onChange={setInterphone}
        keyboardType="default"
        {...props}
      />
    </View>
  );
};
