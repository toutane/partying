import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Thumbnail } from "../../../Thumbnail/Thumbnail";

import { AuthContext } from "../../../../contexts/AuthContext";

export const LeftView = props => {
  const { currentUserId } = useContext(AuthContext);
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        flexDirection: "row",
        alignItems: "center"
      }}
      onPress={() =>
        props.party.organizer_id === currentUserId
          ? props.navigation.navigate("Profile")
          : props.navigation.navigate("UserView", {
              user: props.party.organizer
            })
      }
    >
      <Thumbnail
        user={{
          uid: props.party.organizer_id,
          avatar: props.party.organizer.avatar
        }}
        crntUserId={currentUserId}
        {...props}
      />
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
            fontFamily: "sf-text-semibold",
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
