import React, { useState, useEffect, useContext } from "react";
import { View, ScrollView, Animated, Button } from "react-native";

import { ThemeContext } from "../../contexts/ThemeContext";
import { FriendsContext } from "../../contexts/FriendsContext";
import { CreatePartyContext } from "../../contexts/CreatePartyContext";
import { GuestsContext } from "../../contexts/GuestsContext";

import SearchBarHeader from "../Headers/SearchBarHeader";
import { FriendsFlatList } from "../Parties/NewParty/ParticipantsCard/GuestsList/FriendsFlatList";

export default GuestsListView = (props) => {
  const { theme } = useContext(ThemeContext);
  const {
    friends,
    loading,
    refreshing,
    retrieveData,
    retrieveMore,
  } = useContext(FriendsContext);
  const { guests_id, setGuests_id } = useContext(CreatePartyContext);
  const { loadGuest_data, setGuests_data } = useContext(GuestsContext);

  const [scrollY, setScrollY] = useState(new Animated.Value(100));
  const [user, setUser] = useState(props.navigation.getParam("user"));
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      search === "" ? retrieveData(user.user_id) : null;
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  const searchedFriends = friends.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  const handleTouchSelected = (user_id) => {
    setGuests_id((prvState) => prvState.concat(user_id));
    loadGuest_data(user_id);
  };

  const handleTouchUnselected = (user_id) => {
    setGuests_id((prvState) => prvState.filter((id) => id !== user_id));
    setGuests_data((prvState) =>
      prvState.filter((obj) => obj.user_id !== user_id)
    );
  };

  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      <FriendsFlatList
        theme={theme}
        user={user}
        guests_id={guests_id}
        handleTouchUnselected={handleTouchUnselected}
        handleTouchSelected={handleTouchSelected}
        friends={searchedFriends}
        retrieveMore={retrieveMore}
        refreshing={refreshing}
        loading={loading}
        {...props}
      />
      <SearchBarHeader
        {...props}
        scrollY={scrollY}
        title={`${guests_id.length} Guests`}
        search={search}
        setSearch={setSearch}
      />
    </View>
  );
};
