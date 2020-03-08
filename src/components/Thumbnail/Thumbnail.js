import React from "react";
import { TouchableOpacity } from "react-native";

import { Image } from "./styles";

export const Thumbnail = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        props.user.uid === props.crntUserId
          ? props.navigation.navigate("Profile")
          : props.navigation.navigate("Notifications")
      }
    >
      <Image source={{ uri: props.user.avatar }} />
    </TouchableOpacity>
  );
};
