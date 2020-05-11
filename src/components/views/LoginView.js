import React, { useContext, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";

export default LoginView = (props) => {
  const { login } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        Login
      </Text>
      <View style={{ marginBottom: 30 }}>
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
            marginTop: 20,
            color: theme.fontColor,
          }}
          placeholderTextColor={
            theme.theme === "light" ? theme.gray2 : theme.gray3
          }
          autoCapitalize="none"
          placeholder="email"
          returnKeyType="next"
          keyboardType="email-address"
          ref={(input) => (emailInput = input)}
          onSubmitEditing={() => passwordInput.focus()}
          onChangeText={setEmail}
          selectionColor={"#1DC161"}
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
          placeholderTextColor={
            theme.theme === "light" ? theme.gray2 : theme.gray3
          }
          autoCapitalize="none"
          placeholder="password"
          secureTextEntry
          returnKeyType="go"
          ref={(input) => (passwordInput = input)}
          onChangeText={setPassword}
          selectionColor={"#1DC161"}
          onSubmitEditing={() =>
            login(email, password).catch((error) => console.log(error))
          }
        />
      </View>
      <Button
        title="Login"
        onPress={
          () => login(email, password).catch((error) => console.log(error))
          // login("toutane@leger.email", "123456").catch((error) =>
          //   console.log(error)
          // )
          // login("bob@bob.email", "123456").catch(error => console.log(error))
          // login("elton@john.email", "123456").catch(error => console.log(error))
        }
      />
      <Button
        title="Go to register view"
        onPress={() => props.navigation.navigate("Register")}
      />
    </View>
  );
};
