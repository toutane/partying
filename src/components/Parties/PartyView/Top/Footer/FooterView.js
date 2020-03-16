import React, { useState } from "react";
import { View } from "react-native";
import { Item } from "./Item";
import { OptionalView } from "./OptionalView";

const moment = require("moment");

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
          data={`${moment(props.party.start.time)
            .format("LT")
            .slice(0, -3)} - ${moment(props.party.end.time)
            .format("LT")
            .slice(0, -3)}`}
          {...props}
        />
        <Item
          title="Date"
          icon="calendar"
          data={`${moment(props.party.start.date)
            .format("L")
            .slice(0, 5)} - ${moment(props.party.end.date)
            .format("L")
            .slice(0, 5)}`}
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
