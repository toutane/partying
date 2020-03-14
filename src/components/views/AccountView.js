import React, { useState, useContext } from "react";
import { View, ScrollView, Animated, Button } from "react-native";
import { screenHeight } from "../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";

import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

import DefaultHeader from "../Headers/DefaultHeader";
import AccountScreen from "../AccountView/AccoutScreen";
import { HeaderView } from "../AccountView/Header/HeaderView";

export default AccountView = props => {
  const { currentUserData } = useContext(UserContext);
  const { login, logout } = useContext(AuthContext);
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
          marginTop: 46 + useSafeArea().top
        }}
        scrollEventThrottle={16}
        snapToAlignment={"start"}
        snapToInterval={60}
      >
        <HeaderView
          {...props}
          theme={theme}
          titleOpacity={titleOpacity}
          user={currentUserData}
        />
        <AccountScreen {...props} theme={theme} user={currentUserData} />
        {/* <Button title="Switch theme" onPress={() => switchTheme()} />
        <Button title="Logout" onPress={() => logout()} /> */}
      </ScrollView>
      <DefaultHeader {...props} scrollY={scrollY} title="Your profile" />
    </View>
  );
};
