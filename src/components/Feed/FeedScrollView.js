import React, { useContext } from "react";
import { ScrollView, Text } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

import { ThemeContext } from "../../contexts/ThemeContext";
import { FeedContext } from "../../contexts/FeedContext";

import PartyCard from "../Parties/PartyCard/PartyCard";

import { PARTIES } from "./parties";

export default function FeedScrollView(props) {
  const { theme } = useContext(ThemeContext);
  const { parties } = useContext(FeedContext);
  return (
    <ScrollView
      style={{ marginTop: useSafeArea().top - 14, marginBottom: 200 }}
    >
      {parties.map((e, i) => (
        <PartyCard key={i} party={e} theme={theme} {...props} />
      ))}
    </ScrollView>
  );
}
