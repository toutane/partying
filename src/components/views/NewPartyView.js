import React, { useState, useContext } from "react";
import { View, ScrollView, Animated, Button } from "react-native";
import { screenHeight } from "../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";

import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

import DefaultHeader from "../Headers/DefaultHeader";
import NewPartyScreen from "../Parties/NewParty/NewPartyScreen";

export default NewPartyView = props => {
  const { currentUserData } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

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
        <NewPartyScreen
          {...props}
          theme={theme}
          user={currentUserData}
          titleOpacity={titleOpacity}
        />
      </ScrollView>
      <DefaultHeader {...props} scrollY={scrollY} title="New party" />
    </View>
  );
};
