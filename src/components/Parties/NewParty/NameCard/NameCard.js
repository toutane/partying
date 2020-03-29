import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "../../../Card/styles";
import { Inputs } from "./Inputs";
import { Hr } from "../../../hr";

export const NameCard = props => {
  const [showInfo, setShwoInfo] = useState(false);
  return (
    <View style={{ marginTop: 30, marginBottom: 30, paddingHorizontal: 25 }}>
      <Card {...props}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setShwoInfo(prvState => !prvState)}
        >
          <Text
            style={{
              marginBottom: 5,
              fontFamily: "sf-text-semibold",
              fontSize: 17,
              color: props.theme.fontColor
            }}
          >
            Name your party
          </Text>
          <Text
            style={{
              marginBottom: 15,
              fontFamily: "sf-text-regular",
              fontSize: 13,
              color: props.theme.gray2
            }}
            numberOfLines={showInfo ? 10 : 1}
          >
            Give a name and description to your new event to let your guests
            know what it is. You can also pass there information about your
            party (is it disguised for example ? etc).
          </Text>
        </TouchableOpacity>
        <Hr {...props} style={{ marginBottom: 15 }} />
        <Inputs {...props} />
      </Card>
    </View>
  );
};
