import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-feather1s";
import DateTimePicker from "@react-native-community/datetimepicker";
import { CreatePartyContext } from "../../../../contexts/CreatePartyContext";

const moment = require("moment");

export const TimeInput = props => {
  const { partyStarts, setPartyStarts, partyEnds, setPartyEnds } = useContext(
    CreatePartyContext
  );
  const [show, setShow] = useState(false);

  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
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
            fontSize: 15,
            color: props.theme.gray4,
            marginBottom: 3
          }}
        >
          Time
        </Text>
        <Text
          style={{
            fontFamily: "sf-text-semibold",
            fontSize: 17,
            color: props.theme.fontColor
          }}
          numberOfLines={2}
        >
          {`From ${moment(partyStarts.date).format("dddd MMMM Do")} to ${moment(
            partyEnds.date
          ).format("dddd MMMM Do")}`}
        </Text>
      </View>
    </View>
  );
};
