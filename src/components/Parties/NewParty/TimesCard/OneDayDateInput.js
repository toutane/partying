import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { CreatePartyContext } from "../../../../contexts/CreatePartyContext";
import DateTimePicker from "@react-native-community/datetimepicker";

const moment = require("moment");

export const OneDayDateInput = props => {
  const { partyStarts, setPartyStarts } = useContext(CreatePartyContext);
  const [show, setShow] = useState(false);

  return (
    <View style={{ flexDirection: "row", marginTop: 6 }}>
      <View style={{ flexDirection: "column", marginTop: 3 }}>
        <Text
          style={{
            fontFamily: "sf-text-medium",
            fontSize: 15,
            color: props.theme.gray4,
            marginRight: 15
          }}
        >
          on
        </Text>
      </View>
      <View style={{ flexDirection: "column", marginLeft: 10, marginTop: 1 }}>
        <Text
          style={{
            fontFamily: "sf-text-semibold",
            fontSize: 17,
            color: props.theme.fontColor,
            marginBottom: 10
          }}
          numberOfLines={2}
        >
          {moment(partyStarts.date).format("dddd MMMM Do")}
        </Text>
      </View>
    </View>
  );
};
