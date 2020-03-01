import React, { useContext } from "react";
import { ScrollView, Text } from "react-native";

import { ThemeContext } from "../../contexts/ThemeContext";
import { UserContext } from "../../contexts/UserContext";

import PartyCard from "../Parties/PartyCard/PartyCard";

import { PARTIES } from "./parties";

export default function FeedScrollView(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <ScrollView style={{ marginTop: 30, marginBottom: 250 }}>
      {PARTIES.map((e, i) => (
        <PartyCard key={i} event={e} theme={theme} {...props} />
      ))}
    </ScrollView>
  );
}
