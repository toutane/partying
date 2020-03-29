import React, { useContext } from "react";
import { View, Animated, TouchableOpacity, Text } from "react-native";
import { BlurView } from "expo-blur";
import { ThemeContext } from "../../contexts/ThemeContext";
import { screenWidth } from "../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { CreateButton } from "../Parties/NewParty/Header/CreateButton";

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
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={() =>
            props.backView === "Profile"
              ? props.navigation.navigate("Account")
              : props.navigation.pop()
          }
        >
          <Feather
            style={{ marginLeft: 5 }}
            name="chevron-left"
            size={35}
            color={theme.green}
          />
          <Text
            style={{
              top: 1,
              right: 5,
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
