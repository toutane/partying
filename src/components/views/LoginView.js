import React, { useState, useContext } from "react";
import { View, Animated, ScrollView, Button } from "react-native";
import { screenHeight } from "../../utils/dimensions";

import { AuthContext } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";

import DefaultHeader from "../Headers/DefaultHeader";

export default LoginView = props => {
  const { theme } = useContext(ThemeContext);
  const { login } = useContext(AuthContext);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      <ScrollView
        style={{
          zIndex: 1,
          height: screenHeight
        }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } }
        ])}
        contentContainerStyle={{ marginTop: 90 }}
        scrollEventThrottle={16}
        snapToAlignment={"start"}
        snapToInterval={60}
      >
        <Animated.Text
          style={{
            marginLeft: 15,
            fontSize: 34,
            fontFamily: "sf-display-bold",
            color: theme.fontColor
          }}
        >
          Login
        </Animated.Text>

        <Button
          title="Login"
          onPress={() =>
            login("email@email.com", "123456").catch(error =>
              console.log(error)
            )
          }
        />
      </ScrollView>
      <DefaultHeader {...props} scrollY={scrollY} title="Login" />
    </View>
  );
};
