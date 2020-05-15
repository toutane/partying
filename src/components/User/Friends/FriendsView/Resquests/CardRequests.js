import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { ThemeContext } from "../../../../../contexts/ThemeContext";
import ViewRequests from "./ViewRequests";
import { screenWidth } from "../../../../../utils/dimensions";

export default function CardRequests(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        backgroundColor: theme.theme !== "light" ? theme.gray6 : "white",
        // shadowOpacity: 0.03,
        // shadowRadius: 20,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowColor: theme.fontColor,
        marginTop: 12.5,
        marginBottom: 12.5,
        borderRadius: 17,
        justifyContent: "space-between",
        width: screenWidth / 2,
      }}
    >
      {props.user.requests.length > 0 && (
        <ViewRequests theme={theme} {...props} />
      )}
      {/* <AddFriendsButton theme={theme} /> */}
    </TouchableOpacity>
  );
}
