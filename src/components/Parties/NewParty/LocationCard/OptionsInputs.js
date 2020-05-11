import React, { useContext } from "react";
import { View, Text } from "react-native";
import { EntryInputs } from "./EntryInputs";
import { CreatePartyContext } from "../../../../contexts/CreatePartyContext";
import { Item } from "./Item";

export const OptionsInputs = (props) => {
  const { house, setHouse } = useContext(CreatePartyContext);
  return (
    <View style={{ paddingHorizontal: 25, paddingVertical: 15 }}>
      <Text
        style={{
          fontFamily: "sf-text-medium",
          fontSize: 15,
          color: props.theme.fontColor,
          marginBottom: 15,
        }}
      >
        Add some infos :
      </Text>
      <EntryInputs {...props} />
      <View style={{ marginTop: 20 }}>
        <Item
          data={house}
          onChange={setHouse}
          title="About the place :"
          icon="home"
          isFullWidth={true}
          keyboardType="default"
          {...props}
        />
      </View>
    </View>
  );
};
