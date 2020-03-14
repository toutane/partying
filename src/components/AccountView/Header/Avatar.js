import React from "react";
import { View, Image } from "react-native";

export const Avatar = props => {
  return (
    <Image
      style={{ borderRadius: 17, height: 60, width: 60 }}
      source={{ uri: props.uri }}
    />
  );
};
