import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export const Nomenclature = props => {
  return (
    <View
      style={{
        flex: 1,
        marginLeft: 15,
        justifyContent: "space-around"
      }}
    >
      <Text
        style={{
          color: props.theme.fontColor,
          fontSize: 17,
          fontFamily: "sf-text-bold",
          flexShrink: 1
        }}
        numberOfLines={1}
      >
        {props.party.name}
      </Text>
      <TouchableOpacity
        onPress={() =>
          props.party.organizer.user_id === props.crntUserId
            ? props.navigation.navigate("Account")
            : props.navigation.navigate("UserView", {
                user: props.party.organizer
              })
        }
      >
        <Text
          style={{
            fontSize: 15,
            color: props.theme.gray,
            fontFamily: "sf-text-semibold"
          }}
          numberOfLines={1}
        >
          {"by "}
          <Text style={{ color: props.theme.gray }}>
            {props.party.organizer.username}
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
