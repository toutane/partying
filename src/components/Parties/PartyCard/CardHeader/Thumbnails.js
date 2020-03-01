import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { Thumbnail } from "../../../Thumbnail/Thumbnail";

export const Thumbnails = props => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Thumbnail
        user={{
          uid: props.event.organizer.uid,
          avatar: props.event.organizer.avatar
        }}
        {...props}
      />
      {props.event.participants.length > 0 && (
        <TouchableOpacity
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
            +{props.event.participants.length}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
