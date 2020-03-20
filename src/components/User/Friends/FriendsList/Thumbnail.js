import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Image } from "../../../Thumbnail/styles";

export const Thumbnail = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        props.navigation.navigate("UserView", {
          user: props.friend
        })
      }
    >
      <Image
        source={{
          uri: props.friend.avatar
        }}
      />
    </TouchableOpacity>
  );
};
