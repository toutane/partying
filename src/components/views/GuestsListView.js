import React, { useState, useEffect, useContext } from "react";
import { View, ScrollView, Animated, Button } from "react-native";

import { ThemeContext } from "../../contexts/ThemeContext";
import { FriendsContext } from "../../contexts/FriendsContext";
import { AllUsersContext } from "../../contexts/AllUsersContext";
import { CreatePartyContext } from "../../contexts/CreatePartyContext";
import { GuestsContext } from "../../contexts/GuestsContext";

import GuestsListHeader from "../Parties/NewParty/ParticipantsCard/GuestsList/GuestsListHeader";
import { FriendsFlatList } from "../Parties/NewParty/ParticipantsCard/GuestsList/FriendsFlatList";
import { AllUsersFlatList } from "../Parties/NewParty/ParticipantsCard/GuestsList/AllUsersFlatList";

export default GuestsListView = (props) => {
  const { theme } = useContext(ThemeContext);
  const {
    friends,
    loading,
    refreshing,
    retrieveData,
    retrieveMore,
  } = useContext(FriendsContext);
  // const {
  //   users,
  //   setSearchValue,
  //   loadingState,
  //   refreshingState,
  //   retrieveUsersMore,
  // } = useContext(AllUsersContext);

  const { guests_id } = useContext(CreatePartyContext);
  const { handleTouchUnselected, handleTouchSelected } = useContext(
    GuestsContext
  );

  const [scrollY, setScrollY] = useState(new Animated.Value(100));
  const [user, setUser] = useState(props.navigation.getParam("user"));
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState(0);

  useEffect(() => {
    try {
      search === "" ? retrieveData(user.user_id) : null;
    } catch (error) {
      // console.log(error);
    }
  }, [search]);

  // useEffect(() => {
  //   setSearchValue(search);
  // }, [search]);

  const searchedFriends = friends.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      {!filterBy ? (
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
          hasFriends={user.friends_id.length !== 0}
          {...props}
        />
      ) : // <AllUsersFlatList
      //   theme={theme}
      //   user={user}
      //   guests_id={guests_id}
      //   handleTouchUnselected={handleTouchUnselected}
      //   handleTouchSelected={handleTouchSelected}
      //   users={users}
      //   retrieveMore={retrieveUsersMore}
      //   refreshing={refreshingState}
      //   loading={loadingState}
      //   {...props}
      // />
      null}
      <GuestsListHeader
        {...props}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        scrollY={scrollY}
        title={`${guests_id.length} guest${guests_id.length > 1 ? "s" : ""}`}
        search={search}
        setSearch={setSearch}
        loading={loading}
        hasFriends={user.friends_id.length !== 0}
      />
    </View>
  );
};
