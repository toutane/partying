import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { ThemeContext } from "../../../../../../contexts/ThemeContext";

export default function InfoCardParty(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.theme !== "light" ? theme.gray6 : "white",
        shadowOpacity: 0.03,
        shadowRadius: 20,
        shadowColor: theme.fontColor,
        paddingVertical: 35,
        paddingHorizontal: 25,
        marginTop: 12.5,
        marginBottom: 12.5,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 17,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>You don't have any pending parties</Text>
    </TouchableOpacity>
  );
}
