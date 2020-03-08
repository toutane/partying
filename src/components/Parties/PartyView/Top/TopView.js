import React from "react";
import { View, Text } from "react-native";

import { TopViewCard } from "./styles";
import { MiddleView } from "./Middle/MiddleView";

export const TopView = props => {
  return (
    <TopViewCard {...props}>
      <View style={{ marginTop: 15, marginBottom: 50 }}>
        <MiddleView {...props} />
      </View>
    </TopViewCard>
  );
};
