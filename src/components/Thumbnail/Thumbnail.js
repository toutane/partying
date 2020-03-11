import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TouchableOpacity } from "react-native";
import { Image } from "./styles";

export const Thumbnail = props => {
  const { currentUserId } = useContext(UserContext);
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        props.user.user_id === currentUserId
          ? props.navigation.navigate("Profile")
          : props.navigation.navigate("UserView", {
              user: props.user
            })
      }
    >
      <Image source={{ uri: props.user.avatar }} />
    </TouchableOpacity>
  );
};
