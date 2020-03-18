import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Button } from "./styles";
import { screenWidth } from "../../../../../../utils/dimensions";

export const OptionsBar = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        paddingHorizontal: 25
      }}
    >
      <Button
        {...props}
        style={{ width: screenWidth / 2 - 32.5 }}
        activeOpacity={0.5}
      >
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontFamily: "sf-text-semibold"
          }}
        >
          Edit profile
        </Text>
      </Button>
      <Button
        {...props}
        style={{ width: screenWidth / 2 - 32.5 }}
        activeOpacity={0.5}
      >
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontFamily: "sf-text-semibold"
          }}
        >
          Settings
        </Text>
      </Button>
    </View>
  );
};
