import React, { useState, useContext } from "react";
import { View, ScrollView, Animated, Button } from "react-native";
import { screenHeight } from "../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";

import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

import DefaultHeader from "../Headers/DefaultHeader";
import AccountScreen from "../User/Account/AccountView/AccoutScreen";
import { HeaderView } from "../User/Account/AccountView/Header/HeaderView";
import { TopHeader } from "../User/Account/AccountView/TopHeader/TopHeader";
import PushNotificationsListener from "../../navigation/PushNotificationsListener";

export default AccountView = (props) => {
  const { isLoading, currentUserData, currentUserRequests } = useContext(
    UserContext
  );
  const { theme } = useContext(ThemeContext);

  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  return (
    <View
      style={{
        backgroundColor: theme.theme === "light" ? "white" : theme.gray6,
      }}
    >
      <TopHeader theme={theme} {...props} />
      <ScrollView
        style={{
          zIndex: 1,
          height: screenHeight,
          // backgroundColor: theme.backgroundColor
        }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } },
        ])}
        contentContainerStyle={{
          marginTop: 46 + useSafeArea().top,
        }}
        scrollEventThrottle={16}
        snapToAlignment={"start"}
        snapToInterval={60}
      >
        <View
          style={{
            backgroundColor: theme.backgroundColor,
          }}
        >
          <HeaderView
            {...props}
            theme={theme}
            user={currentUserData}
            isLoading={isLoading}
          />
          <AccountScreen
            {...props}
            theme={theme}
            isLoading={isLoading}
            user={currentUserData}
            userRequests={currentUserRequests}
          />
        </View>
      </ScrollView>
      <DefaultHeader
        {...props}
        scrollY={scrollY}
        title={isLoading ? "" : currentUserData.username}
        isWhiteBackground={true}
      />
      <PushNotificationsListener {...props} />
    </View>
  );
};
