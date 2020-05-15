import React from "react";
import { View, ScrollView, Text } from "react-native";

import PartyCard from "../../../../../Parties/PartyCard/PartyCard";
import { screenWidth } from "../../../../../../utils/dimensions";

export const MyPartiesScrollView = (props) => {
  return (
    <View>
      <Text
        style={{
          marginLeft: 25,
          marginBottom: 5,
          color: props.theme.fontColor,
          fontSize: 19,
          fontFamily: "sf-text-semibold",
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
          <View
            key={i}
            style={{ marginRight: props.parties.length === i + 1 && 25 }}
          >
            <PartyCard party={e} {...props} isAccountScroll={true} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
