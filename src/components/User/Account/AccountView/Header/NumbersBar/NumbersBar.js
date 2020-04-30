import React from "react";
import { View, Text } from "react-native";
import { Item } from "./Item";

export const NumbersBar = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-between",
      }}
    >
      <Item
        {...props}
        intro="You have"
        data={
          props.user.friends_id !== undefined && props.user.friends_id.length
        }
        type="friends"
      />
      <View
        style={{ backgroundColor: props.theme.gray3, width: 1, height: 35 }}
      />
      <Item {...props} intro="You went to" data={20} type="parties" />
      <View
        style={{ backgroundColor: props.theme.gray3, width: 1, height: 35 }}
      />
      <Item
        {...props}
        intro="You created"
        data={
          props.user.parties_id !== undefined && props.user.parties_id.length
        }
        type="organized"
      />
    </View>
  );
};
