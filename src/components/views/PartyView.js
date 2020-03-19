import React, { useState, useContext, useEffect } from "react";
import { View, ScrollView, Animated, Button } from "react-native";
import { screenHeight } from "../../utils/dimensions";
import { useSafeArea } from "react-native-safe-area-context";

import { ThemeContext } from "../../contexts/ThemeContext";
import { FeedContext } from "../../contexts/FeedContext";

import DefaultHeader from "../Headers/DefaultHeader";
import PartyScreen from "../Parties/PartyView/PartyScreen";

export default PartyView = props => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const { loadParticipants } = useContext(FeedContext);

  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [party, setParty] = useState(props.navigation.getParam("party"));
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    loadParticipants(party.party_id).then(arr => setParticipants(arr));
  }, []);

  return (
    <View>
      <ScrollView
        style={{
          zIndex: 1,
          height: screenHeight,
          backgroundColor: theme.theme !== "light" ? theme.gray6 : "white"
        }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } }
        ])}
        contentContainerStyle={{
          marginTop: 46 + useSafeArea().top
        }}
        scrollEventThrottle={16}
        snapToAlignment={"start"}
        snapToInterval={60}
      >
        <PartyScreen
          theme={theme}
          party={party}
          participants={participants}
          {...props}
        />
      </ScrollView>
      <DefaultHeader
        {...props}
        scrollY={scrollY}
        title={`${party.organizer.username} - ${party.name}`}
        isWhiteBackground={true}
      />
    </View>
  );
};
