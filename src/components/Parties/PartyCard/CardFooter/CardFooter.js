import React, { useState } from "react";
import { View } from "react-native";
import { Item } from "./Item";

export const CardFooter = props => {
  const [locationExtended, setLocationExtended] = useState(false);
  return (
    <View
      style={{
        height: 55,
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      {!locationExtended && (
        <Item title="Time" icon="clock" data={props.party} {...props} />
      )}
      {!locationExtended && (
        <Item title="Date" icon="calendar" data={props.party} {...props} />
      )}
      <Item
        title="Location"
        icon="map-pin"
        data={props.party.location}
        extd={locationExtended}
        setExtd={setLocationExtended}
        {...props}
      />
    </View>
  );
};
