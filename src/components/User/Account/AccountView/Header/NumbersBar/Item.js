import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

export const Item = (props) => {
  return (
    <TouchableOpacity
      onPress={() =>
        props.type === "friends" &&
        props.navigation.navigate("FriendsList", { user: props.user })
      }
    >
      {/* <Text
        style={{
          color: props.theme.gray,
          fontSize: 13,
          fontFamily: "sf-text-medium",
        }}
      >
        {props.intro}
      </Text> */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            color: props.theme.fontColor,
            fontSize: 24,
            fontFamily: "sf-text-bold",
          }}
        >
          {props.data}
        </Text>
        <Text
          style={{
            color: props.theme.gray,
            fontSize: 15,
            fontFamily: "sf-text-regular",
          }}
        >
          {" "}
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
