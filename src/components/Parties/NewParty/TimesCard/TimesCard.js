import React from "react";
import { View, Text } from "react-native";
import { Card } from "../../../Card/styles";
import { DateInput } from "./DateInput";
import { Hr } from "../../../hr";
import { TimeInput } from "./TimeInput";
import { SeveralDays } from "./SeveralDays";

export const TimesCard = props => {
  return (
    <View style={{ marginBottom: 30, paddingHorizontal: 25 }}>
      <Card {...props}>
        <Text
          style={{
            marginBottom: 15,
            fontFamily: "sf-text-semibold",
            fontSize: 17,
            color: props.theme.fontColor
          }}
        >
          Set the times
        </Text>
        <SeveralDays {...props} />
        <Hr {...props} style={{ marginBottom: 15 }} />
        {/* <Hr {...props} style={{ marginBottom: 15 }} /> */}
        <DateInput {...props} />
        <TimeInput {...props} />
      </Card>
    </View>
  );
};
