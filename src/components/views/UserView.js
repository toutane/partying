import React, { useState, useContext } from "react";
import { View, ScrollView, Animated, Button } from "react-native";
import { screenHeight } from "../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";

import { ThemeContext } from "../../contexts/ThemeContext";

import DefaultHeader from "../Headers/DefaultHeader";

export default UserView = props => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [user, setUser] = useState(props.navigation.getParam("user"));

  return (
    <View>
      <ScrollView
        style={{
          zIndex: 1,
          height: screenHeight,
          backgroundColor: theme.backgroundColor
        }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } }
        ])}
        contentContainerStyle={{
          marginTop: 46 + useSafeArea().top,
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
        scrollEventThrottle={16}
        snapToAlignment={"start"}
        snapToInterval={60}
      >
        <Animated.Text
          style={{
            position: "absolute",
            top: 0,
            left: 25,
            fontSize: 34,
            fontFamily: "sf-display-bold",
            color: theme.fontColor
          }}
        >
          {user.username} profile
        </Animated.Text>
      </ScrollView>
      <DefaultHeader
        {...props}
        scrollY={scrollY}
        title={`${user.username} - ${user.user_id}`}
      />
    </View>
  );
};
