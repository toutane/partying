import React from "react";
import { View, Text, Button } from "react-native";

export default Login = props => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login</Text>
      <Button
        title="Register"
        onPress={() => props.navigation.navigate("Register")}
      />
    </View>
  );
};
