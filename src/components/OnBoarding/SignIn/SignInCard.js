import React from "react";
import {
  View,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { screenWidth } from "../../../utils/dimensions";

import Inputs from "./Inputs";
import ContinueBtn from "./ContinueBtn";
import HelpBtn from "./HelpBtn";

export default function SignInCard(props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={30}
      style={{
        zIndex: 10,
        width: screenWidth - 70,
        justifyContent: "flex-end",
        marginBottom: 100,
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            paddingHorizontal: 40,
            paddingVertical: 35,
            backgroundColor:
              props.theme.theme !== "light" ? props.theme.gray6 : "white",
            shadowOpacity: 0.03,
            shadowRadius: 20,
            shadowColor: props.theme.fontColor,
            borderRadius: 23,
          }}
        >
          <View style={{ marginBottom: 12.5, alignItems: "center" }}>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "sf-display-bold",
                color: props.theme.fontColor,
              }}
            >
              Sign in to Partying
            </Text>
          </View>
          <Text
            style={{
              fontSize: 13,
              fontFamily: "sf-text-regular",
              color: props.error !== "null" ? "red" : "rgba(0, 0, 0, 0)",
            }}
          >
            {props.error}
          </Text>
          <Inputs {...props} />
          <ContinueBtn {...props} />
          <HelpBtn {...props} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
