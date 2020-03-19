import React, { useState, useEffect, useContext } from "react";
import { View, ScrollView, Animated, Button } from "react-native";
import firebase from "../../firebase/Firebase";

import { ThemeContext } from "../../contexts/ThemeContext";
import { FriendsContext } from "../../contexts/FriendsContext";

import DefaultHeader from "../Headers/DefaultHeader";
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

  useEffect(() => {
    try {
      retrieveData(user.user_id);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      <FriendsFlatList
        theme={theme}
        user={user}
        friends={friends}
        retrieveMore={retrieveMore}
        refreshing={refreshing}
        loading={loading}
        {...props}
      />
      <DefaultHeader
        {...props}
        scrollY={scrollY}
        title={`${user.friends_id.length} friends`}
      />
    </View>
  );
};
