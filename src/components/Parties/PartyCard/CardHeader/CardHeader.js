import React, { useContext } from "react";
import { View } from "react-native";

import { Thumbnails } from "./Thumbnails";
import { Nomenclature } from "./Nomenclature";

import { UserContext } from "../../../../contexts/UserContext";

export const CardHeader = props => {
  const { currentUserId } = useContext(UserContext);
  return (
    <View style={{ flexDirection: "row" }}>
      <Thumbnails {...props} />
      <Nomenclature crntUserId={currentUserId} {...props} />
    </View>
  );
};
