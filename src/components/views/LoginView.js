import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";

export default LoginView = props => {
  const { login } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.backgroundColor
      }}
    >
      <Text
        style={{
          position: "absolute",
          top: 46 + useSafeArea().top,
          left: 25,
          fontSize: 34,
          fontFamily: "sf-display-bold",
          color: theme.fontColor
        }}
      >
        Login
      </Text>
      <Button
        title="Login"
        onPress={() =>
          login("bob@bob.email", "123456").catch(error => console.log(error))
        }
      />
      <Button
        title="Go to register view"
        onPress={() => props.navigation.navigate("Register")}
      />
    </View>
  );
};
