import React, { useContext } from "react";
import { View, Animated, TextInput, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import { ThemeContext } from "../../contexts/ThemeContext";
import { screenWidth } from "../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default SearchBarHeader = props => {
  const { theme } = useContext(ThemeContext);
  _getHeaderOpacity = () => {
    return props.scrollY.interpolate({
      inputRange: [0, 30, 60, 90],
      outputRange: [0, 0, 1, 1],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  _getHeaderBlackOpacity = () => {
    return props.scrollY.interpolate({
      inputRange: [0, 35, 50, 90],
      outputRange: [1, 1, 0, 0],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  _getHeaderTitleOpacity = () => {
    return props.scrollY.interpolate({
      inputRange: [0, 30, 35, 70],
      outputRange: [0, 0, 1, 1],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  const headerOpacity = _getHeaderOpacity();
  const headerBlackOpacity = _getHeaderBlackOpacity();
  const headerTitleOpacity = _getHeaderTitleOpacity();
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
            height: 96 + useSafeArea().top,
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
          opacity: headerBlackOpacity
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
          flexDirection: "row",
          paddingHorizontal: 25
        }}
      >
        <Animated.Text
          style={{
            fontSize: 17,
            fontFamily: "sf-text-semibold",
            color: theme.fontColor,
            opacity: headerTitleOpacity
          }}
          numberOfLines={1}
        >
          {props.title}
        </Animated.Text>
      </View>
      <View
        style={{
          zIndex: 10,
          height: 35,
          flexDirection: "row",
          paddingHorizontal: 20
        }}
      >
        <TouchableOpacity
          style={{
            width: 35,
            borderRadius: 10,
            backgroundColor: theme.gray5,
            alignItems: "center"
          }}
          onPress={() => props.navigation.pop()}
        >
          <Ionicons
            name="ios-arrow-round-back"
            size={30}
            style={{ top: 2 }}
            color={theme.fontColor}
          />
        </TouchableOpacity>
        <TextInput
          style={{
            flex: 1,
            flexWrap: "wrap",
            marginLeft: 15,
            backgroundColor: theme.gray5,
            borderRadius: 10,
            paddingHorizontal: 10,
            fontSize: 18
          }}
          selectionColor={"#1DC161"}
          autoCapitalize="none"
          placeholder={"search"}
          autoFocus={false}
          returnKeyType="next"
          value={props.search}
          onChangeText={search => props.setSearch(search)}
        />
      </View>
    </View>
  );
};
