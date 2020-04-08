import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { GuestsContext } from "../../../../../contexts/GuestsContext";
import { Thumbnail } from "./Thumbnail";

export const ThumbnailsList = (props) => {
  const { guests_data } = useContext(GuestsContext);

  // useEffect(() => console.log(guests_data), [guests_data]);
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", margin: -5 }}>
      <View style={{ margin: 5 }}>
        <Thumbnail guest={props.user} {...props} />
      </View>
      {guests_data.length > 0 &&
        guests_data.slice(0, 10).map((guest, i) => (
          <View style={{ margin: 5 }} key={i}>
            <Thumbnail guest={guest} {...props} />
          </View>
        ))}
      {guests_data.length > 10 ? (
        <View
          style={{
            borderRadius: 13,
            backgroundColor: "#F9F0DB",
            margin: 5,
            width: 45,
            height: 45,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fead01",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            +{guests_data.length - 10}
          </Text>
        </View>
      ) : null}
    </View>
  );
};
