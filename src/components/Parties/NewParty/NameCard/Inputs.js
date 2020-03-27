import React, { useContext } from "react";
import {
  View,
  Text,
  TextInput,
  DrawerLayoutAndroidComponent
} from "react-native";
import { Hr } from "../../../hr";

import { CreatePartyContext } from "../../../../contexts/CreatePartyContext";

export const Inputs = props => {
  const { setPartyName, partyDescription, setPartyDescription } = useContext(
    CreatePartyContext
  );
  return (
    <View>
      <View>
        <Text
          style={{
            fontSize: 15,
            color: props.theme.fontColor,
            fontFamily: "sf-text-medium"
          }}
        >
          TITLE :{" "}
        </Text>
        <TextInput
          keyboardAppearance={props.theme.theme}
          multiline={true}
          style={{
            marginTop: 10,
            fontSize: 22,
            color: props.theme.fontColor,
            fontFamily: "sf-display-bold"
          }}
          placeholder="Party title"
          autoFocus={true}
          returnKeyType="next"
          selectionColor={"#1DC161"}
          onChangeText={name => setPartyName(name)}
          placeholderTextColor={props.theme.gray4}
        />
      </View>
      <Hr {...props} style={{ marginTop: 15 }} />
      <View style={{ marginTop: 15 }}>
        <Text
          style={{
            fontSize: 15,
            color: props.theme.fontColor,
            fontFamily: "sf-text-medium"
          }}
        >
          DESCRIPTION :{" "}
        </Text>
        <TextInput
          keyboardAppearance={props.theme.theme}
          multiline={true}
          value={partyDescription}
          style={{
            marginTop: 0,
            fontSize: 17,
            color: props.theme.fontColor,
            fontFamily: "sf-text-regular",
            lineHeight: 30,
            textAlign: "justify"
          }}
          placeholder="Party description"
          autoFocus={false}
          returnKeyType="next"
          selectionColor={"#1DC161"}
          onChangeText={name => setPartyDescription(name)}
          placeholderTextColor={props.theme.gray4}
        />
      </View>
    </View>
  );
};
