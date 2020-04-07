import React, { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Image } from "../../../../Thumbnail/styles";
import { UserContext } from "../../../../../contexts/UserContext";

export const Thumbnail = (props) => {
  const { currentUserId } = useContext(UserContext);
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        props.guest.user_id === currentUserId
          ? props.navigation.navigate("Account")
          : props.navigation.navigate("UserView", {
              user: props.guest,
            })
      }
    >
      <Image
        source={{
          uri: props.guest.avatar,
        }}
      />
    </TouchableOpacity>
  );
};
