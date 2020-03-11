import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Thumbnail } from "../../../../Thumbnail/Thumbnail";

export const ThumbnailsList = props => {
  return (
    <View
      style={{
        paddingVertical: 20,
        flexDirection: "row"
      }}
    >
      <Thumbnail key={1} user={props.party.organizer} {...props} />
      {props.participants.slice(0, 3).map((person, i) => (
        <View style={{ marginLeft: 10 }} key={i}>
          <Thumbnail user={person} {...props} />
        </View>
      ))}
      {props.party.participants_id.length > 3 && (
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            borderRadius: 13,
            backgroundColor: "#F9F0DB",
            marginLeft: 10,
            width: 45,
            height: 45,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "#fead01",
              fontWeight: "bold",
              fontSize: 16
            }}
          >
            +{props.party.participants_id.length - 3}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
