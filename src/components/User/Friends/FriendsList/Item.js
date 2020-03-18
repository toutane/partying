import React from "react";
import { View, Text } from "react-native";

export const Item = props => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text>{`ID : ${props.friend.user_id} ( ${props.friend.id} )`}</Text>
    </View>
  );
};
