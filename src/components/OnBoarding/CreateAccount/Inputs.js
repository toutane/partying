import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function Inputs(props) {
  return (
    <View>
      <TextInput
        style={{
          height: 50,
          width: "100%",
          backgroundColor:
            props.theme.theme !== "light"
              ? props.theme.gray5
              : props.theme.gray6,
          color: props.theme.fontColor,
          borderRadius: 13,
          marginTop: 12.5,
          paddingHorizontal: 15,
          fontFamily: "sf-text-regular",
          fontSize: 18,
        }}
        placeholder="Email address"
        returnKeyType="next"
        keyboardType="email-address"
        autoCapitalize="none"
        onSubmitEditing={() => usernameInput.focus()}
        onChangeText={(e) => {
          props.setEmail(e), props.setError("null");
        }}
        selectionColor={"#1DC161"}
        placeholderTextColor={
          props.theme.theme === "light" ? props.theme.gray2 : props.theme.gray3
        }
      />
      <TextInput
        style={{
          height: 50,
          width: "100%",
          backgroundColor:
            props.theme.theme !== "light"
              ? props.theme.gray5
              : props.theme.gray6,
          color: props.theme.fontColor,
          borderRadius: 13,
          paddingHorizontal: 15,
          marginTop: 15,
          fontFamily: "sf-text-regular",
          fontSize: 18,
        }}
        placeholder="Username"
        returnKeyType="next"
        ref={(input) => (usernameInput = input)}
        onSubmitEditing={() => passwordInput.focus()}
        onChangeText={(e) => {
          props.setUsername(e), props.setError("null");
        }}
        selectionColor={"#1DC161"}
        placeholderTextColor={
          props.theme.theme === "light" ? props.theme.gray2 : props.theme.gray3
        }
      />
      <TextInput
        style={{
          height: 50,
          width: "100%",
          backgroundColor:
            props.theme.theme !== "light"
              ? props.theme.gray5
              : props.theme.gray6,
          color: props.theme.fontColor,
          borderRadius: 13,
          paddingHorizontal: 15,
          marginTop: 15,
          fontFamily: "sf-text-regular",
          fontSize: 18,
        }}
        placeholder="Password"
        returnKeyType="join"
        keyboardType="ascii-capable"
        onChangeText={(e) => {
          props.setPassword(e), e.length >= 6 ? props.setError("null") : null;
        }}
        selectionColor={"#1DC161"}
        // secureTextEntry={true}
        ref={(input) => (passwordInput = input)}
        placeholderTextColor={
          props.theme.theme === "light" ? props.theme.gray2 : props.theme.gray3
        }
        onSubmitEditing={props.register}
      />
    </View>
  );
}
