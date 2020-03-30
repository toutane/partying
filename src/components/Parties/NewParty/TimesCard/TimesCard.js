import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Card } from "../../../Card/styles";
import { Hr } from "../../../hr";
import { CreatePartyContext } from "../../../../contexts/CreatePartyContext";

import { DateInput } from "./DateInput";
import { TimeInput } from "./TimeInput";
import { SeveralDays } from "./SeveralDays";

export const TimesCard = props => {
  const { severalDays, dateDiff } = useContext(CreatePartyContext);
  return (
    <View style={{ marginBottom: 30, paddingHorizontal: 25 }}>
      <Card {...props}>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 15,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontFamily: "sf-text-semibold",
              fontSize: 17,
              color: props.theme.fontColor
            }}
          >
            Set the times
          </Text>
          <Text
            style={{
              fontFamily: "sf-text-regular",
              fontSize: 15,
              color: props.theme.gray4
            }}
          >
            {severalDays ? `( ${dateDiff} days )` : null}
          </Text>
        </View>
        <SeveralDays {...props} />
        <Hr {...props} style={{ marginBottom: 15 }} />
        {/* <Hr {...props} style={{ marginBottom: 15 }} /> */}
        <DateInput {...props} />
        <TimeInput {...props} />
      </Card>
    </View>
  );
};
