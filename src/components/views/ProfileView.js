import React, { useState, useContext } from "react";
import { View, ScrollView, Animated, Button } from "react-native";
import { screenHeight } from "../../utils/dimensions";

import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";

import DefaultHeader from "../Headers/DefaultHeader";

export default ProfileView = props => {
  const { logout } = useContext(AuthContext);
  const { theme, switchTheme } = useContext(ThemeContext);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  _getTitleOpacity = () => {
    return scrollY.interpolate({
      inputRange: [0, 35, 36, 100],
      outputRange: [1, 1, 0, 0],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };

  const titleOpacity = _getTitleOpacity();
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
          flex: 1,
          marginTop: 100,
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
            left: 15,
            opacity: titleOpacity,
            fontSize: 34,
            fontFamily: "sf-display-bold",
            color: theme.fontColor
          }}
        >
          Profile
        </Animated.Text>
        <View style={{ marginBottom: 100 }}>
          <Button title="Switch theme" onPress={() => switchTheme()} />
          <Button title="Logout" onPress={() => logout()} />
        </View>
      </ScrollView>
      <DefaultHeader {...props} scrollY={scrollY} title="Profile" />
    </View>
  );
};
