import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Thumbnail } from "../../../../User/Friends/FriendsList/Thumbnail";
import { Feather } from "@expo/vector-icons";

export const Item = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        props.selected
          ? props.handleTouchUnselected(props.friend.user_id)
          : props.handleTouchSelected(props.friend.user_id)
      }
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: props.selected ? props.theme.green : "transparent",
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ flexDirection: "row" }}
        onPress={() =>
          props.navigation.navigate("UserView", { user: props.friend })
        }
      >
        <Thumbnail {...props} />
        <View
          activeOpacity={0.5}
          style={{
            marginLeft: 15,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: props.selected ? "white" : props.theme.fontColor,
              fontSize: 17,
              fontFamily: "sf-text-semibold",
            }}
          >
            {props.friend.username}
          </Text>
          <Text
            style={{
              color: props.selected ? props.theme.gray5 : props.theme.gray,
              fontSize: 13,
              fontFamily: "sf-text-medium",
            }}
          >
            {props.friend.name}
          </Text>
        </View>
      </TouchableOpacity>
      {props.selected && <Feather name="check" size={25} color="white" />}
    </TouchableOpacity>
  );
};
