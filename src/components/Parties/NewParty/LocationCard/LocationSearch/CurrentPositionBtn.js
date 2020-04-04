import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LocationContext } from "../../../../../contexts/LocationContext";

export const CurrentPositionBtn = (props) => {
  const { _getLocationAsync } = useContext(LocationContext);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        height: 35,
        width: 35,
        borderRadius: 10,
        backgroundColor: props.theme.gray5,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => _getLocationAsync()}
    >
      <Feather
        name="navigation"
        size={20}
        color={props.theme.gray}
        fill={true}
      />
    </TouchableOpacity>
  );
};
