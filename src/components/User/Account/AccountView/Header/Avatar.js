import React from "react";
import { View, Image } from "react-native";

export const Avatar = props => {
  return (
    <Image
      style={{ borderRadius: 17, height: 65, width: 65 }}
      source={{ uri: props.uri }}
    />
  );
};
