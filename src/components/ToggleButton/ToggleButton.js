import React, { useContext } from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ThemeContext } from "../../contexts/ThemeContext";

export const ToggleButton = props => {
  const { theme } = useContext(ThemeContext);
  return (
    <View>
      {props.isActive ? (
        <View
          style={{
            width: 22,
            height: 22,
            borderRadius: 100,
            backgroundColor: theme.green,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Feather name="check" size={15} color={props.backgroundColor} />
        </View>
      ) : (
        <View
          style={{
            width: 22,
            height: 22,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: theme.gray4
          }}
        />
      )}
    </View>
  );
};
