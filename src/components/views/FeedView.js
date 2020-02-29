import React, { useState, useContext } from "react";
import { View, ScrollView, Animated } from "react-native";
import { screenHeight } from "../../utils/dimensions";

import { ThemeContext } from "../../contexts/ThemeContext";

import DefaultHeader from "../Headers/DefaultHeader";

export default FeedView = props => {
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
        contentContainerStyle={{ marginTop: 100 }}
        scrollEventThrottle={16}
        snapToAlignment={"start"}
        snapToInterval={60}
      >
        <Animated.Text
          style={{
            marginLeft: 15,
            opacity: titleOpacity,
            fontSize: 34,
            fontFamily: "sf-display-bold",
            color: theme.fontColor
          }}
        >
          Feed
        </Animated.Text>
      </ScrollView>
      <DefaultHeader {...props} scrollY={scrollY} title="Feed" />
    </View>
  );
};