import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { RequestsContext } from "../../../../../contexts/RequestsContext";

export default function ButtonsRequestedUser(props) {
  const { cancelRequest } = useContext(RequestsContext);
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <TouchableOpacity
        onPress={() => cancelRequest(props.user)}
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          paddingVertical: 5,
          paddingHorizontal: 5,
          backgroundColor:
            props.theme.theme !== "light" ? props.theme.gray6 : "white",
          borderWidth: 0.75,
          borderColor: props.theme.gray4,
          flexDirection: "row",
        }}
      >
        <Feather size={13} name="x" color={props.theme.gray4} />
      </TouchableOpacity>
      <View
        style={{
          marginLeft: 5,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          paddingVertical: 5,
          paddingHorizontal: 5,
          backgroundColor: props.theme.light_green,
          flexDirection: "row",
        }}
      >
        <Feather size={13} name="send" color={props.theme.green} />
        <Text
          style={{
            marginLeft: 2.5,
            color: props.theme.green,
            fontSize: 11,
            fontFamily: "sf-text-semibold",
          }}
        >
          Sent
        </Text>
      </View>
    </View>
  );
}
