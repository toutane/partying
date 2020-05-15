import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import BadgeRequests from "./BadgeRequests";
import CardRequestUser from "./CardRequestUser";

export default function ViewRequests(props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(
    () => setIsLoading(props.userRequests.request_users === undefined),
    [props.userRequests.request_users]
  );
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 15,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <Text
          style={{
            color: props.theme.fontColor,
            fontSize: 19,
            fontFamily: "sf-text-semibold",
          }}
        >
          {`Request${props.user.requests.length > 1 ? "s" : ""}`}
        </Text>
        <BadgeRequests number={props.user.requests.length} {...props} />
      </View>
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
        {!isLoading ? (
          props.userRequests.request_users.map((item, i) => (
            <CardRequestUser
              key={i}
              theme={props.theme}
              user={item}
              index={i}
            />
          ))
        ) : (
          <View />
        )}
      </ScrollView>
    </View>
  );
}
