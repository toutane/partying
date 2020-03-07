import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { Thumbnail } from "../../../Thumbnail/Thumbnail";

export const Thumbnails = props => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Thumbnail
        user={{
          uid: props.party.organizer_id,
          avatar: props.party.organizer.avatar
        }}
        {...props}
      />
      {props.party.participants_id.length > 0 && (
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
            +{props.party.participants_id.length}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
