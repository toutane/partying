import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Thumbnail } from "./Thumbnail";

export const Item = (props) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        marginTop: 20,
      }}
    >
      <Thumbnail {...props} />
      <TouchableOpacity
        style={{ flex: 1, marginLeft: 15, justifyContent: "center" }}
        onPress={() =>
          props.navigation.navigate("UserView", { user: props.friend })
        }
      >
        <Text
          style={{
            color: props.theme.fontColor,
            fontSize: 17,
            fontFamily: "sf-text-semibold",
          }}
        >
          {props.friend.username}
        </Text>
        <Text
          style={{
            color: props.theme.gray,
            fontSize: 13,
            fontFamily: "sf-text-medium",
          }}
        >
          {props.friend.bio}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
