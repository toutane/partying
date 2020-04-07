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
    </View>
  );
};
