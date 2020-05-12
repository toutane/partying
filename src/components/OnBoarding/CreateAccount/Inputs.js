import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function Inputs(props) {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("azerty");
  const [secureTextEntry, setSecureTextEntry] = useState(false);

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
          marginTop: 20,
          paddingHorizontal: 15,
          fontFamily: "sf-text-regular",
          fontSize: 18,
        }}
        placeholder="Phone number"
        returnKeyType="next"
        keyboardType="phone-pad"
        onSubmitEditing={() => usernameInput.focus()}
        onChangeText={setPhoneNumber}
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
        onChangeText={setUsername}
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
        onChangeText={setPassword}
        selectionColor={"#1DC161"}
        secureTextEntry
        ref={(input) => (passwordInput = input)}
        placeholderTextColor={
          props.theme.theme === "light" ? props.theme.gray2 : props.theme.gray3
        }
        onSubmitEditing={
          () => null
          // register(username, email, password).catch((error) =>
          //   console.log(error)
          // )
        }
      />
    </View>
  );
}
