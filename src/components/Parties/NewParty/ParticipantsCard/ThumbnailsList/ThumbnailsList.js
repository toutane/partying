import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { GuestsContext } from "../../../../../contexts/GuestsContext";
import { Thumbnail } from "./Thumbnail";

export const ThumbnailsList = (props) => {
  const { guests_data } = useContext(GuestsContext);

  // useEffect(() => console.log(guests_data), [guests_data]);
  return (
    <View style={{ flexDirection: "row" }}>
      <Thumbnail guest={props.user} {...props} />
      {guests_data.length > 0 &&
        guests_data.slice(0, 4).map((guest, i) => (
          <View style={{ marginLeft: 10 }} key={i}>
            <Thumbnail guest={guest} {...props} />
          </View>
        ))}
      {guests_data.length > 4 ? (
        <View
          style={{
            borderRadius: 13,
            backgroundColor: "#F9F0DB",
            marginLeft: 10,
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fead01",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            +{guests_data.length - 3}
          </Text>
        </View>
      ) : null}
    </View>
  );
};
