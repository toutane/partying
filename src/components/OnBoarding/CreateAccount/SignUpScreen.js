import React, { useState, useContext } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

import { ThemeContext } from "../../../contexts/ThemeContext";
import { AuthContext } from "../../../contexts/AuthContext";
import Title from "./Title";
import SignUpCard from "./SignUpCard";

export default function SignUpScreen(props) {
  const { register, login } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("azerty");

  return (
    <View style={{ alignItems: "center" }}>
      <SignUpCard theme={theme} />
      {/* <View style={{ top: 250 }}>
        <TextInput
          style={{
            borderRadius: 13,
            height: 50,
            width: 300,
            borderWidth: 2,
            fontFamily: "sf-text-regular",
            fontSize: 20,
            borderColor: theme.green,
            paddingHorizontal: 15,
            color: theme.fontColor,
          }}
          autoCapitalize="none"
          autoFocus={false}
          placeholder="username"
          returnKeyType="next"
          onSubmitEditing={() => emailInput.focus()}
          onChangeText={setUsername}
          selectionColor={"#1DC161"}
          placeholderTextColor={
            theme.theme === "light" ? theme.gray2 : theme.gray3
          }
        />
        <TextInput
          style={{
            borderRadius: 13,
            height: 50,
            width: 300,
            borderWidth: 2,
            fontFamily: "sf-text-regular",
            fontSize: 20,
            borderColor: theme.green,
            paddingHorizontal: 15,
            marginTop: 30,
            color: theme.fontColor,
          }}
          autoCapitalize="none"
          placeholder="email"
          keyboardType="email-address"
          returnKeyType="next"
          ref={(input) => (emailInput = input)}
          onSubmitEditing={() => passwordInput.focus()}
          onChangeText={setEmail}
          selectionColor={"#1DC161"}
          placeholderTextColor={
            theme.theme === "light" ? theme.gray2 : theme.gray3
          }
        />
        <TextInput
          style={{
            borderRadius: 13,
            height: 50,
            width: 300,
            borderWidth: 2,
            fontFamily: "sf-text-regular",
            fontSize: 20,
            borderColor: theme.green,
            paddingHorizontal: 15,
            marginTop: 30,
            marginBottom: 30,
            color: theme.fontColor,
          }}
          autoCapitalize="none"
          placeholder="password"
          secureTextEntry
          returnKeyType="go"
          ref={(input) => (passwordInput = input)}
          onChangeText={setPassword}
          selectionColor={"#1DC161"}
          placeholderTextColor={
            theme.theme === "light" ? theme.gray2 : theme.gray3
          }
          onSubmitEditing={() =>
            register(username, email, password).catch((error) =>
              console.log(error)
            )
          }
        />
        <Button
          title="Register"
          color={theme.green}
          onPress={() =>
            register(username, email, password).catch((error) =>
              console.log(error)
            )
          }
        />
      </View> */}
    </View>
  );
}
