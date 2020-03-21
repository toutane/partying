import React, { useState, useEffect, useContext } from "react";
import { View, ScrollView, Animated, Button } from "react-native";

import { ThemeContext } from "../../contexts/ThemeContext";
import { FriendsContext } from "../../contexts/FriendsContext";

import SearchBarHeader from "../Headers/SearchBarHeader";
import { FriendsFlatList } from "../User/Friends/FriendsList/FriendsFlatList";

export default FriendsListView = props => {
  const { theme } = useContext(ThemeContext);
  const {
    friends,
    loading,
    refreshing,
    retrieveData,
    retrieveMore
  } = useContext(FriendsContext);

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

  const searchedFriends = friends.filter(user =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      <FriendsFlatList
        theme={theme}
        user={user}
        friends={searchedFriends}
        retrieveMore={retrieveMore}
        refreshing={refreshing}
        loading={loading}
        {...props}
      />
      <SearchBarHeader
        {...props}
        scrollY={scrollY}
        title={`${user.friends_id.length} friends`}
        search={search}
        setSearch={setSearch}
      />
    </View>
  );
};
