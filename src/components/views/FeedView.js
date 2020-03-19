import React, { useState, useContext } from "react";
import { View, ScrollView, Animated } from "react-native";
import { screenHeight } from "../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";

import { ThemeContext } from "../../contexts/ThemeContext";

import DefaultHeader from "../Headers/DefaultHeader";
import FeedScrollView from "../Feed/FeedScrollView";

export default FeedView = props => {
  const { theme } = useContext(ThemeContext);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
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
        contentContainerStyle={{ marginTop: 46 + useSafeArea().top }}
        scrollEventThrottle={16}
        snapToAlignment={"start"}
        snapToInterval={60}
      >
        <Animated.Text
          style={{
            marginLeft: 25,
            fontSize: 34,
            fontFamily: "sf-display-bold",
            color: theme.fontColor
          }}
        >
          Your feed
        </Animated.Text>
        <FeedScrollView {...props} />
      </ScrollView>
      <DefaultHeader {...props} scrollY={scrollY} title="Your feed" />
    </View>
  );
};
