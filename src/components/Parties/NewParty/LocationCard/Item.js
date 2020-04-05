import React, { useRef } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import Icon from "react-native-feather1s";

export const Item = (props) => {
  const focus = useRef(null);
  return (
    <TouchableOpacity
      onPress={() => focus.current.focus()}
      activeOpacity={0.6}
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: props.isFullWidth ? "100%" : "50%",
      }}
    >
      <Icon
        name={props.icon}
        size={30}
        color={props.theme.gray4}
        style={{ marginRight: 5 }}
      />
      <View style={{ flexDirection: "column", flex: 1 }}>
        <Text
          style={{
            fontFamily: "sf-text-regular",
            fontSize: 14,
            color: props.theme.gray2,
            marginBottom: 3,
          }}
        >
          {props.title}
        </Text>
        <TextInput
          ref={focus}
          keyboardAppearance={props.theme.theme}
          multiline={false}
          placeholder="...."
          selectionColor={"#1DC161"}
          returnKeyType="none"
          onChangeText={(name) => props.onChange(name)}
          placeholderTextColor={props.theme.gray4}
          style={{
            fontFamily: "sf-text-semibold",
            fontSize: 16,
            color: props.theme.fontColor,
          }}
          value={props.data}
        ></TextInput>
      </View>
    </TouchableOpacity>
  );
};
