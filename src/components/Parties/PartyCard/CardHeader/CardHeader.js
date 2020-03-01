import React, { useContext } from "react";
import { View } from "react-native";

import { Thumbnails } from "./Thumbnails";
import { Nomenclature } from "./Nomenclature";

import { UserContext } from "../../../../contexts/UserContext";

export default function CardHeader(props) {
  const { currentUserId } = useContext(UserContext);
  return (
    <View style={{ flexDirection: "row" }}>
      <Thumbnails crntUserId={currentUserId} {...props} />
      <Nomenclature crntUserId={currentUserId} {...props} />
    </View>
  );
}
