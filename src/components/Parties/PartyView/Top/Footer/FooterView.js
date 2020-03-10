import React, { useState } from "react";
import { View } from "react-native";
import { Item } from "./Item";

import { OptionalView } from "./OptionalView";

export const FooterView = props => {
  return (
    <View
      style={{
        marginTop: 10,
        marginBottom: props.party.house !== undefined ? 10 : 0
      }}
    >
      <View
        style={{
          height: 55,
          marginBottom: 10,
          flexDirection: "row"
        }}
      >
        <Item
          title="Time"
          icon="clock"
          data={`${props.party.start.time} - ${props.party.end.time}`}
          {...props}
        />
        <Item
          title="Date"
          icon="calendar"
          data={`${props.party.start.date} - ${props.party.end.date}`}
          {...props}
        />
      </View>
      <View
        style={{
          marginBottom:
            props.party.entry_code === undefined &&
            props.party.interphone === undefined &&
            props.party.house !== undefined
              ? 20
              : props.party.entry_code !== undefined ||
                props.party.interphone !== undefined
              ? 20
              : 10
        }}
      >
        <Item
          title="Location"
          icon="map-pin"
          data={props.party.location}
          isFullWidth={true}
          {...props}
        />
      </View>
      <OptionalView {...props} />
    </View>
  );
};
