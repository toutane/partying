import React from "react";
import { Image } from "react-native";

export const Avatar = props => {
  return (
    <Image
      style={{ borderRadius: 15, height: 60, width: 60 }}
      source={{ uri: props.uri }}
    />
  );
};
