import React, { useContext } from "react";
import { View, TextInput } from "react-native";

import { CreatePartyContext } from "../../../../contexts/CreatePartyContext";

export const MiddleInputs = props => {
  const { setPartyName, setPartyDescription } = useContext(CreatePartyContext);
  return (
    <View>
      <TextInput
        multiline={true}
        style={{
          fontSize: 34,
          color: props.theme.fontColor,
          fontFamily: "sf-display-bold"
        }}
        placeholder="Party name"
        autoFocus={true}
        returnKeyType="next"
        selectionColor={"#1DC161"}
        onChangeText={name => setPartyName(name)}
      />
      <TextInput
        multiline={false}
        style={{
          marginTop: 5,
          fontFamily: "sf-text-regular",
          fontSize: 17,
          color: props.theme.fontColor,
          lineHeight: 30,
          textAlign: "justify"
        }}
        placeholder="Party description"
        autoFocus={false}
        returnKeyType="next"
        selectionColor={"#1DC161"}
        onChangeText={description => setPartyDescription(description)}
      />
    </View>
  );
};
