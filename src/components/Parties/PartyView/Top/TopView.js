import React from "react";
import { View, Text } from "react-native";
import { Hr } from "../../../hr";

import { TopViewCard } from "./styles";
import { MiddleView } from "./Middle/MiddleView";
import { FooterView } from "./Footer/FooterView";

export const TopView = props => {
  return (
    <TopViewCard {...props}>
      <View style={{ marginBottom: 20 }}>
        <MiddleView {...props} />
        <Hr {...props} />
        <FooterView {...props} />
      </View>
    </TopViewCard>
  );
};
