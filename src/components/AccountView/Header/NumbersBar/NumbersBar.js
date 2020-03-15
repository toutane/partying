import React from "react";
import { View, Text } from "react-native";
import { Item } from "./Item";

export const NumbersBar = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 25,
        marginTop: 20,
        justifyContent: "space-around"
      }}
    >
      <Item {...props} intro="You have" data={357} type="friends" />
      <Item {...props} intro="You went to" data={20} type="parties" />
      <Item {...props} intro="You created" data={5} type="parties" />
    </View>
  );
};
