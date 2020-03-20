import React from "react";
import { View, Text } from "react-native";
import { Thumbnail } from "../../../Thumbnail/Thumbnail";
import { screenWidth } from "../../../../utils/dimensions";

export const Item = props => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        marginTop: 20
      }}
    >
      <Thumbnail user={props.friend} {...props} uri={props.friend.avatar} />
      <View style={{ flex: 1, marginLeft: 15, justifyContent: "center" }}>
        <Text
          style={{
            color: props.theme.fontColor,
            fontSize: 17,
            fontFamily: "sf-text-semibold"
          }}
        >
          {props.friend.username}
        </Text>
        <Text
          style={{
            color: props.theme.gray,
            fontSize: 13,
            fontFamily: "sf-text-medium"
          }}
        >
          {props.friend.name}
        </Text>
      </View>
    </View>
  );
};
