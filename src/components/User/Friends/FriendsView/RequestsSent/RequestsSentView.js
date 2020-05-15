import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import BadgeRequestsSent from "./BadgeRequestsSent";
import { ScrollView } from "react-native-gesture-handler";
import CardRequestedUser from "./CardRequestedUser";

export default function RequestsSentView(props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(
    () => setIsLoading(props.userRequests.requested_users === undefined),
    [props.userRequests.requested_users]
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
          {`Request${props.user.requests_sent.length > 1 ? "s" : ""} sent`}
        </Text>
        <BadgeRequestsSent
          number={props.user.requests_sent.length}
          {...props}
        />
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
          props.userRequests.requested_users.map((item, i) => (
            <CardRequestedUser
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
