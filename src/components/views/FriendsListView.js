import React, { useState, useContext } from "react";
import { View, ScrollView, Animated, Button } from "react-native";
import { screenHeight } from "../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";

import { ThemeContext } from "../../contexts/ThemeContext";

import DefaultHeader from "../Headers/DefaultHeader";
import { FriendsListScreen } from "../User/Friends/FriendsList/FriendsListScreen";

export default FriendsListView = props => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const { theme } = useContext(ThemeContext);
  const [user, setUser] = useState(props.navigation.getParam("user"));

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
        <FriendsListScreen theme={theme} user={user} {...props} />
      </ScrollView>
      <DefaultHeader
        {...props}
        scrollY={scrollY}
        title={`${user.friends_id.length} fiends`}
      />
    </View>
  );
};
