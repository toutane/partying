import React, { useState, useContext } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";

export default RegisterView = (props) => {
  const { register, login } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("azerty");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.backgroundColor,
      }}
    >
      <Text
        style={{
          position: "absolute",
          top: 46 + useSafeArea().top,
          left: 25,
          fontSize: 34,
          fontFamily: "sf-display-bold",
          color: theme.fontColor,
        }}
      >
        Register!
      </Text>
      <TextInput
        style={{
          borderRadius: 13,
          height: 40,
          width: 200,
          borderWidth: 2,
          fontFamily: "sf-text-regular",
          fontSize: 20,
          borderColor: theme.green,
          paddingHorizontal: 15,
        }}
        autoCapitalize="none"
        autoFocus={true}
        placeholder="username"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => emailInput.focus()}
        onChangeText={setUsername}
        selectionColor={"#1DC161"}
      />
      <TextInput
        style={{
          borderRadius: 13,
          height: 40,
          width: 200,
          borderWidth: 2,
          fontFamily: "sf-text-regular",
          fontSize: 20,
          borderColor: theme.green,
          paddingHorizontal: 15,
          marginTop: 20,
        }}
        autoCapitalize="none"
        placeholder="email"
        returnKeyType="next"
        ref={(input) => (emailInput = input)}
        onSubmitEditing={() => passwordInput.focus()}
        onChangeText={setEmail}
        selectionColor={"#1DC161"}
      />
      <TextInput
        style={{
          borderRadius: 13,
          height: 40,
          width: 200,
          borderWidth: 2,
          fontFamily: "sf-text-regular",
          fontSize: 20,
          borderColor: theme.green,
          paddingHorizontal: 15,
          marginTop: 20,
          // marginBottom: 15,
        }}
        autoCapitalize="none"
        placeholder="password"
        secureTextEntry
        returnKeyType="go"
        ref={(input) => (passwordInput = input)}
        onChangeText={setPassword}
        selectionColor={"#1DC161"}
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
    </View>
  );
};
