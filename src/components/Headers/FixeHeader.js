import React, { useContext } from "react";
import { View, Animated, TouchableOpacity, Text } from "react-native";
import { BlurView } from "expo-blur";
import { ThemeContext } from "../../contexts/ThemeContext";
import { screenWidth } from "../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default FixeHeader = props => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={{ zIndex: 2, position: "absolute" }}>
      <Animated.View
        style={{
          zIndex: 2,
          position: "absolute",
          top: 0
        }}
      >
        <BlurView
          tint={theme.theme}
          intensity={100}
          style={{
            zIndex: 2,
            height: 46 + useSafeArea().top,
            width: screenWidth
          }}
        />
      </Animated.View>
      <Animated.View
        style={{
          zIndex: 3,
          height: 46 + useSafeArea().top,
          width: screenWidth,
          backgroundColor:
            props.isWhiteBackground !== undefined
              ? theme.theme !== "light"
                ? theme.gray6
                : "white"
              : theme.backgroundColor,
          position: "absolute",
          top: 0,
          opacity: 0
        }}
      />
      <View
        style={{
          zIndex: 4,
          height: 46 + useSafeArea().top,
          width: screenWidth,
          alignItems: "center",
          justifyContent: "center",
          top: (useSafeArea().top - 4) / 2,
          flexDirection: "row"
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            left: 0,
            position: "absolute",
            alignItems: "center"
          }}
          onPress={() =>
            props.backView === "Profile"
              ? props.navigation.navigate("Account")
              : props.navigation.pop()
          }
        >
          <Ionicons
            style={{ marginLeft: 15, marginRight: 5, marginTop: 2 }}
            name="ios-arrow-back"
            size={25}
            color={theme.green}
          />
          <Text
            style={{
              color: theme.green,
              fontSize: 17,
              fontFamily: "sf-text-regular"
            }}
          >
            {props.backView}
          </Text>
        </TouchableOpacity>
        <Animated.Text
          style={{
            fontSize: 17,
            fontFamily: "sf-text-semibold",
            color: theme.fontColor,
            opacity: 1
          }}
          numberOfLines={1}
        >
          {props.title}
        </Animated.Text>
      </View>
    </View>
  );
};
