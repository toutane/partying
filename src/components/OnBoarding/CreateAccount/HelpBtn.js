import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function HelpBtn(props) {
  return (
    <View style={{ alignItems: "flex-end", marginTop: 10 }}>
      <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
        <Text
          style={{
            fontFamily: "sf-text-regular",
            fontSize: 15,
            color: props.theme.green,
          }}
        >
          Already have a account ?
        </Text>
      </TouchableOpacity>
    </View>
  );
}
