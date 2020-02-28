import React from "react";
import { View, Text, Button } from "react-native";

export default Register = props => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Register</Text>
      <Button
        title="Login"
        onPress={() => props.navigation.navigate("Login")}
      />
    </View>
  );
};
