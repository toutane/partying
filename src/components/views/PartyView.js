import React, { useState, useContext, useEffect } from "react";
import { View, ScrollView, Animated, Button } from "react-native";
import { screenHeight } from "../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";

import { ThemeContext } from "../../contexts/ThemeContext";

import DefaultHeader from "../Headers/DefaultHeader";
import PartyScreen from "../Parties/PartyView/PartyScreen";

export default PartyView = props => {
  const { theme, switchTheme } = useContext(ThemeContext);

  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [party, setParty] = useState(props.navigation.getParam("party"));

  // useEffect(() => {
  //   setParty(props.navigation.getParam("party"));
  // }, [props.navigation.getParam("party")]);

  _getTitleOpacity = () => {
    return scrollY.interpolate({
      inputRange: [0, 25, 26, 100],
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
          backgroundColor: theme.theme !== "light" ? theme.gray6 : "white"
        }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } }
        ])}
        contentContainerStyle={{ marginTop: 46 + useSafeArea().top }}
        scrollEventThrottle={16}
        snapToAlignment={"start"}
        snapToInterval={60}
      >
        <PartyScreen
          theme={theme}
          party={party}
          titleOpacity={titleOpacity}
          {...props}
        />
      </ScrollView>
      <DefaultHeader
        {...props}
        scrollY={scrollY}
        title={`${party.organizer.username} - ${party.name}`}
        isWhiteBackground={true}
      />
    </View>
  );
};
