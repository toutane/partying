import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "./styles";
import { ThemeContext } from "../../../contexts/ThemeContext";

export default function PartyCard(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity>
      <Card theme={theme} />
    </TouchableOpacity>
  );
}
