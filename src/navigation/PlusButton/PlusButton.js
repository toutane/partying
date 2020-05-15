import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ThemeContext } from "../../contexts/ThemeContext";

export default function PlusButton(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => props.navigation.navigate("NewParty")}
      style={{
        marginTop: 9,
        backgroundColor: theme.green,
        width: 45,
        height: 45,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Feather
        name={props.icon}
        size={30}
        color="white"
        // color={props.color}
        style={{ left: 0.5, bottom: 0.5 }}
      />
    </TouchableOpacity>
  );
}
