import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import CardRequests from "./Resquests/CardRequests";
import CardRequestsSent from "./RequestsSent/CardRequestsSent";

export default function ScrollViewFriends(props) {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 20,
      }}
      // snapToAlignment={"center"}
      // snapToInterval={screenWidth}
    >
      {props.user.requests.length > 0 && <CardRequests {...props} />}
      {props.user.requests_sent.length > 0 && <CardRequestsSent {...props} />}
    </ScrollView>
  );
}
