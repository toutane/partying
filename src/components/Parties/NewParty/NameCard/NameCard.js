import React from "react";
import { View, Text } from "react-native";
import { Card } from "../../../Card/styles";
import { Inputs } from "./Inputs";

export const NameCard = props => {
  return (
    <View style={{ marginTop: 30, marginBottom: 30, paddingHorizontal: 25 }}>
      <Card {...props}>
        {/* <Text
          style={{
            marginBottom: 15,
            fontFamily: "sf-text-semibold",
            fontSize: 15
          }}
        >
          NAME YOUR EVENT :
        </Text> */}
        <Inputs {...props} />
      </Card>
    </View>
  );
};
