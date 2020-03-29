import React, { useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { AuthContext } from "../../../contexts/AuthContext";

export const SignOutButton = props => {
  const { logout } = useContext(AuthContext);
  return (
    <View style={{ marginTop: 40 }}>
      <TouchableOpacity
        onPress={() => logout()}
        activeOpacity={0.5}
        style={{
          borderRadius: 13,
          backgroundColor:
            props.theme.theme !== "light" ? props.theme.gray6 : "white",
          paddingHorizontal: 20,
          paddingVertical: 17.5
        }}
      >
        <Text
          style={{
            color: props.theme.red,
            fontSize: 17,
            fontFamily: "sf-text-regular"
          }}
        >
          Sign out
        </Text>
      </TouchableOpacity>
    </View>
  );
};
