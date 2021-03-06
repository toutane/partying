import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Thumbnail } from "../../../Thumbnail/Thumbnail";

import { UserContext } from "../../../../contexts/UserContext";

export const LeftView = props => {
  const { currentUserId } = useContext(UserContext);
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        flexDirection: "row",
        alignItems: "center"
      }}
      onPress={() =>
        props.party.organizer.user_id === currentUserId
          ? props.navigation.navigate("Account")
          : props.navigation.navigate("UserView", {
              user: props.party.organizer
            })
      }
    >
      <Thumbnail user={props.party.organizer} {...props} />
      <View
        style={{
          height: 45,
          marginLeft: 15,
          justifyContent: "space-around"
        }}
      >
        <Text
          style={{
            color: props.theme.fontColor,
            fontSize: 17,
            fontFamily: "sf-text-bold",
            flexShrink: 1
          }}
          numberOfLines={1}
        >
          {props.party.organizer.username}
        </Text>
        <Text
          style={{
            fontFamily: "sf-text-medium",
            fontSize: 15,
            color: props.theme.green
          }}
        >
          Organizer
        </Text>
      </View>
    </TouchableOpacity>
  );
};
