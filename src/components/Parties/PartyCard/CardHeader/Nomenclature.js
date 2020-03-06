import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export const Nomenclature = props => {
  return (
    <View
      style={{
        flex: 1,
        marginLeft: 15,
        justifyContent: "space-between"
      }}
    >
      <Text
        style={{
          color: props.theme.fontColor,
          fontSize: 17,
          fontFamily: "sf-text-semibold",
          flexShrink: 1
        }}
        numberOfLines={1}
      >
        {props.event.name}
      </Text>
      <TouchableOpacity
        onPress={() =>
          props.event.organizer_id === props.crntUserId
            ? props.navigation.navigate("Profile")
            : props.navigation.navigate("Notifications", {
                user_uid: props.event.organizer_id
              })
        }
      >
        <Text
          style={{ fontSize: 15, color: props.theme.gray }}
          numberOfLines={1}
        >
          {"by "}
          <Text style={{ color: props.theme.gray }}>
            {props.event.organizer.username}
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
