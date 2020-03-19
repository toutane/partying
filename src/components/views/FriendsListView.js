import React, { useState, useEffect, useContext } from "react";
import { View, ScrollView, Animated, Button } from "react-native";
import firebase from "../../firebase/Firebase";

import { ThemeContext } from "../../contexts/ThemeContext";
import { FriendsContext } from "../../contexts/FriendsContext";

import DefaultHeader from "../Headers/DefaultHeader";
import { FriendsFlatList } from "../User/Friends/FriendsList/FriendsFlatList";

export default FriendsListView = props => {
  const { theme } = useContext(ThemeContext);
  const { loadFriends } = useContext(FriendsContext);

  const [scrollY, setScrollY] = useState(new Animated.Value(100));
  const [user, setUser] = useState(props.navigation.getParam("user"));

  const [friends, setFriends] = useState([]);
  const [limit, setLimit] = useState(2);
  const [lastVisibleState, setLastVisible] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    try {
      // Cloud Firestore: Initial Query
      retrieveData(user.user_id);
    } catch (error) {
      console.log(error);
    }
  }, []);

  retrieveData = async user_id => {
    try {
      // Set State: Loading
      setLoading(true);
      console.log("Retrieving Data");
      // Cloud Firestore: Query
      let initialQuery = await firebase.db
        .collection("users")
        .doc(user_id)
        .collection("friends")
        .where("id", "<=", 4)
        .orderBy("id")
        .limit(limit);
      // Cloud Firestore: Query Snapshot
      let documentSnapshots = await initialQuery.get();
      // Cloud Firestore: Document Data
      let documentData = documentSnapshots.docs.map(document =>
        document.data()
      );
      // Cloud Firestore: Last Visible Document (Document ID To Start From For Proceeding Queries)
      let lastVisible = documentData[documentData.length - 1].id;
      // Set State
      setFriends(documentData);
      setLastVisible(lastVisible);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Retrieve More
  retrieveMore = async user_id => {
    try {
      // Set State: Refreshing
      setRefreshing(true);
      console.log("Retrieving additional Data");
      // Cloud Firestore: Query (Additional Query)
      let additionalQuery = await firebase.db
        .collection("users")
        .doc(user_id)
        .collection("friends")
        .where("id", "<=", 4)
        .orderBy("id")
        .startAfter(lastVisibleState)
        .limit(limit);
      // Cloud Firestore: Query Snapshot
      let documentSnapshots = await additionalQuery.get();
      // Cloud Firestore: Document Data
      let documentData = documentSnapshots.docs.map(document =>
        document.data()
      );
      // Cloud Firestore: Last Visible Document (Document ID To Start From For Proceeding Queries)
      let lastVisible = documentData[documentData.length - 1].id;
      // Set State
      setFriends([...friends, ...documentData]);
      setLastVisible(lastVisible);
      setRefreshing(false);
      //
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => loadFriends(user.user_id).then(res => setFriends(res)), []);
  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      {/* <ScrollView
        style={{
          zIndex: 1,
          height: screenHeight,
          
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
      > */}
      <FriendsFlatList
        theme={theme}
        user={user}
        friends={friends}
        retrieveMore={retrieveMore}
        refreshing={refreshing}
        loading={loading}
        {...props}
      />
      {/* </ScrollView> */}
      <DefaultHeader
        {...props}
        scrollY={scrollY}
        title={`${user.friends_id.length} friends`}
      />
    </View>
  );
};
