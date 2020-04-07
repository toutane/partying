import React, { useState, useContext } from "react";
import { View, ScrollView, Animated, Button } from "react-native";
import { screenHeight } from "../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { ThemeContext } from "../../contexts/ThemeContext";
import { UserContext } from "../../contexts/UserContext";

import NewPartyScreen from "../Parties/NewParty/NewPartyScreen";
import HeaderView from "../Parties/NewParty/Header/HeaderView";

export default NewPartyView = (props) => {
  const { currentUserData } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  _getTitleOpacity = () => {
    return scrollY.interpolate({
      inputRange: [0, 35, 36, 100],
      outputRange: [1, 1, 0, 0],
      extrapolate: "clamp",
      useNativeDriver: true,
    });
  };

  const titleOpacity = _getTitleOpacity();
  return (
    <View>
      <KeyboardAwareScrollView
        enableResetScrollToCoords={false}
        viewIsInsideTabBar={true}
        keyboardOpeningTime={150}
        extraScrollHeight={300}
        keyboardShouldPersistTaps="handled"
        style={{
          zIndex: 1,
          height: screenHeight,
          backgroundColor: theme.backgroundColor,
        }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } },
        ])}
        contentContainerStyle={{
          marginTop: 46 + useSafeArea().top,
        }}
        scrollEventThrottle={16}
        snapToAlignment={"start"}
        snapToInterval={40}
      >
        <NewPartyScreen
          {...props}
          theme={theme}
          user={currentUserData}
          titleOpacity={titleOpacity}
        />
      </KeyboardAwareScrollView>
      <HeaderView theme={theme} {...props} />
    </View>
  );
};
