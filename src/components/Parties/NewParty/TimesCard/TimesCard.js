import React from "react";
import { View, Text } from "react-native";
import { Card } from "../../../Card/styles";
import { DateInput } from "./DateInput";

export const TimesCard = props => {
  return (
    <View style={{ marginBottom: 30, paddingHorizontal: 25 }}>
      <Card {...props}>
        <Text
          style={{
            marginBottom: 15,
            fontFamily: "sf-text-semibold",
            fontSize: 15,
            color: props.theme.fontColor
          }}
        >
          SET THE TIMES :
        </Text>
        <DateInput {...props} />
      </Card>
    </View>
  );
};
