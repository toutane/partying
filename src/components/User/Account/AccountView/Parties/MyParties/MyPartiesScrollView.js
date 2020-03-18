import React from "react";
import { View, ScrollView, Text } from "react-native";

import PartyCard from "../../../../../Parties/PartyCard/PartyCard";
import { screenWidth } from "../../../../../../utils/dimensions";

export const MyPartiesScrollView = props => {
  return (
    <View>
      <Text
        style={{
          marginLeft: 25,
          marginBottom: 5,
          color: props.theme.fontColor,
          fontSize: 17,
          fontFamily: "sf-text-bold"
        }}
      >
        Your parties
      </Text>
      <ScrollView
        style={{ zIndex: 1 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment={"center"}
        snapToInterval={screenWidth}
      >
        {props.parties.map((e, i) => (
          <PartyCard key={i} party={e} {...props} />
        ))}
      </ScrollView>
    </View>
  );
};
