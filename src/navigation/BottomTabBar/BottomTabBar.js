import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";

export default BottomTabBar = props => {
  const { theme } = useContext(ThemeContext);
  const {
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;

  return (
    <View
      style={{
        flexDirection: "row",
        height: 85,
        backgroundColor:
          theme.theme === "dark" ? "rgb(17, 17, 17)" : "rgb(242, 242, 247)"
      }}
    >
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

        return (
          <TouchableOpacity
            activeOpacity={1}
            key={routeIndex}
            style={{ flex: 1, justifyContent: "start", alignItems: "center" }}
            onPress={() => {
              onTabPress({ route });
            }}
            onLongPress={() => {
              onTabLongPress({ route });
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
            {renderIcon({ route, focused: isRouteActive, tintColor })}
            {/* <Text
              style={{
                fontWeight: "500",
                fontSize: 10,
                marginTop: 2,
                color: isRouteActive
                  ? "rgb(100, 210, 255)"
                  : "rgb(142, 142, 147)"
              }}
            >
              {getLabelText({ route })}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
