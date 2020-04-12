import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "../../../Card/styles";
import { ThemeContext } from "../../../../contexts/ThemeContext";

export const AddFriendsCard = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View>
      <Card theme={theme}>
        <Text>Partying is better with friends !</Text>
      </Card>
    </View>
  );
};
