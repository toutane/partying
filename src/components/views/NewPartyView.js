import React, { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import { screenHeight } from "../../utils/dimensions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { ThemeContext } from "../../contexts/ThemeContext";
import { UserContext } from "../../contexts/UserContext";

import NewPartyScreen from "../Parties/NewParty/NewPartyScreen";
import HeaderView from "../Parties/NewParty/Header/HeaderView";

export default NewPartyView = (props) => {
  const { currentUserData } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const [scrollY, setScrollY] = useState(0);

  function handleScroll(e) {
    setScrollY(e.nativeEvent.contentOffset.y);
  }

  return (
    <View>
      <KeyboardAwareScrollView
        viewIsInsideTabBar={true}
        enableAutomaticScroll={true}
        keyboardOpeningTime={50}
        extraScrollHeight={60}
        enableResetScrollToCoords={true}
        resetScrollToCoords={{
          x: 0,
          y: scrollY > screenHeight ? screenHeight + 60 : scrollY,
        }}
        keyboardShouldPersistTaps="handled"
        style={{
          zIndex: 1,
          height: screenHeight,
          backgroundColor: theme.theme === "light" ? "white" : theme.gray6,
        }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        snapToAlignment={"start"}
        snapToInterval={40}
      >
        <NewPartyScreen {...props} theme={theme} user={currentUserData} />
      </KeyboardAwareScrollView>
      <HeaderView theme={theme} {...props} />
    </View>
  );
};
