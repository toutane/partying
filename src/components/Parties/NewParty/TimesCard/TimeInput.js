import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-feather1s";
import { CreatePartyContext } from "../../../../contexts/CreatePartyContext";

const moment = require("moment");

export const TimeInput = props => {
  const { partyStarts, setPartyStarts, partyEnds, setPartyEnds } = useContext(
    CreatePartyContext
  );
  return (
    <View
      style={{
        height: 85
      }}
    >
      <Text
        style={{
          fontFamily: "sf-text-medium",
          fontSize: 17,
          color: props.theme.fontColor,
          marginBottom: 15
        }}
      >
        Time :
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 40
        }}
      >
        <Icon
          name="clock"
          size={30}
          color={props.theme.gray4}
          style={{ marginRight: 10 }}
        />
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column", marginTop: 3 }}>
            <Text
              style={{
                fontFamily: "sf-text-medium",
                fontSize: 15,
                color: props.theme.gray4,
                marginBottom: 10
              }}
            >
              from
            </Text>
            <Text
              style={{
                fontFamily: "sf-text-medium",
                fontSize: 15,
                color: props.theme.gray4
              }}
            >
              to
            </Text>
          </View>
          <View
            style={{ flexDirection: "column", marginLeft: 10, marginTop: 1 }}
          >
            <Text
              style={{
                fontFamily: "sf-text-semibold",
                fontSize: 17,
                color: props.theme.fontColor,
                marginBottom: 10
              }}
              numberOfLines={2}
            >
              {moment(partyStarts.time).format("LT")}
            </Text>

            <Text
              style={{
                fontFamily: "sf-text-semibold",
                fontSize: 17,
                color: props.theme.fontColor
              }}
              numberOfLines={2}
            >
              {moment(partyEnds.time).format("LT")}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// - [ ] ajouter la différenciation : event de plus de une journée ou nom (pour faire apparaitre ou non la selection du jour de fin de l'event) : si l'event dure plusieurs jours, afficher dans le coin de la card e nombre de jours.
