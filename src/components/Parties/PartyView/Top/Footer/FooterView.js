import React, { useState } from "react";
import { View } from "react-native";
import { Item } from "./Item";
import { Hr } from "../../../../hr";

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
      {props.party.entry_code === undefined &&
      props.party.interphone === undefined &&
      props.party.house !== undefined ? (
        <Hr
          {...props}
          style={{
            marginBottom:
              props.party.entry_code === undefined &&
              props.party.interphone === undefined
                ? 15
                : 0
          }}
        />
      ) : null}
      {props.party.entry_code !== undefined ||
      props.party.interphone !== undefined ? (
        <View>
          <Hr {...props} />
          <View
            style={{
              height: 55,
              marginTop: 10,
              marginBottom: props.party.house !== undefined ? 10 : 0,
              flexDirection: "row"
            }}
          >
            {props.party.entry_code !== undefined && (
              <Item title="Entry code" icon="key" data="13B06" {...props} />
            )}
            {props.party.interphone !== undefined && (
              <Item title="Interphone" icon="phone" data="JOHN" {...props} />
            )}
          </View>
        </View>
      ) : null}
      {props.party.house !== undefined && (
        <Item
          title="House"
          icon="home"
          data={props.party.house}
          isFullWidth={true}
          {...props}
        />
      )}
    </View>
  );
};
