import React, { useContext } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Card } from "./styles";
import Icon from "react-native-feather1s";

import { CreatePartyContext } from "../../../../../contexts/CreatePartyContext";

export const TimeCard = props => {
  const moment = require("moment");
  const { partyStarts, setPartyStarts } = useContext(CreatePartyContext);
  return (
    <Card {...props} style={{ marginTop: 20 }}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Icon
          name="clock"
          size={30}
          color={props.theme.gray4}
          style={{ marginRight: 5 }}
        />
        <View style={{ flexDirection: "column", flex: 1 }}>
          <Text
            style={{
              fontFamily: "sf-text-medium",
              fontSize: 13,
              color: props.theme.gray4,
              marginBottom: 3
            }}
          >
            Date
          </Text>
          <Text
            style={{
              fontFamily: "sf-text-semibold",
              fontSize: 15,
              color: props.theme.fontColor
            }}
            numberOfLines={2}
          >
            {`from ${moment(partyStarts.date).format("ll")} to ${moment(
              partyStarts.date
            ).format("ll")}`}
          </Text>
        </View>
      </TouchableOpacity>
    </Card>
  );
};
