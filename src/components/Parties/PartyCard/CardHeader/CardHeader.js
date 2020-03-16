import React, { useContext } from "react";
import { View } from "react-native";

import { Thumbnails } from "./Thumbnails";
import { Nomenclature } from "./Nomenclature";

import { UserContext } from "../../../../contexts/UserContext";
import { Debug_delete_button } from "./debug_delete_bnt";

export const CardHeader = props => {
  const { currentUserId } = useContext(UserContext);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <View style={{ flexDirection: "row", width: "80%" }}>
        <Thumbnails {...props} />
        <Nomenclature crntUserId={currentUserId} {...props} />
      </View>
      <Debug_delete_button {...props} />
    </View>
  );
};
