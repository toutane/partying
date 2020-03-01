import React from "react";
import { View } from "react-native";
import { Item } from "./Item";

export const CardFooter = props => {
  return (
    <View
      style={{
        height: 55,
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <Item
        title="Time"
        icon="clock"
        data={props.event.event.date}
        {...props}
      />
      <Item
        title="Date"
        icon="calendar"
        data={props.event.event.time}
        {...props}
      />
      <Item
        title="Location"
        icon="map-pin"
        data={props.event.event.location}
        {...props}
      />
    </View>
  );
};
