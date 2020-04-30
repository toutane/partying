import React, { useContext } from "react";
import * as MailComposer from "expo-mail-composer";
import { View, TouchableOpacity, Text } from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import { DeviceContext } from "../../../contexts/DeviceContext";
import { Feather } from "@expo/vector-icons";

export const FeedbackButton = (props) => {
  const { currentUserData } = useContext(UserContext);
  const { device } = useContext(DeviceContext);
  return (
    <View style={{ marginTop: 30 }}>
      <TouchableOpacity
        onPress={() =>
          MailComposer.composeAsync({
            recipients: ["ca@leger.email"],
            body: `Additional Info: ${"\n"}Username: ${
              currentUserData.username
            } ${"\n"}Device: ${device}`,
          })
        }
        activeOpacity={0.5}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 13,
          backgroundColor:
            props.theme.theme !== "light" ? props.theme.gray6 : "white",
          paddingHorizontal: 20,
          paddingVertical: 17.5,
        }}
      >
        <Text
          style={{
            color: props.theme.fontColor,
            fontSize: 17,
            fontFamily: "sf-text-regular",
          }}
        >
          Share Feedback
        </Text>
        <Feather
          style={{ marginLeft: 5 }}
          name="message-square"
          size={20}
          color={props.theme.gray4}
        />
      </TouchableOpacity>
    </View>
  );
};
