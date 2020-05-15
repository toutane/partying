import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/Firebase";

const FriendsContext = React.createContext();
const { Provider } = FriendsContext;

const FriendsProvider = (props) => {
  const [friends, setFriends] = useState([]);
  const [limit, setLimit] = useState(13);
  const [lastVisibleState, setLastVisible] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  retrieveData = async (user_id) => {
    try {
      // Set State: Loading
      setLoading(true);
      // console.log("Retrieving Data");
      // Cloud Firestore: Query
      let initialQuery = await firebase.db
        .collection("users")
        .doc(user_id)
        .collection("friends")
        .where("id", "<=", 16)
        .orderBy("id")
        .limit(limit);
      // Cloud Firestore: Query Snapshot
      let documentSnapshots = await initialQuery.get();
      // Cloud Firestore: Document Data
      let documentData = documentSnapshots.docs.map((document) =>
        document.data()
      );
      // Cloud Firestore: Last Visible Document (Document ID To Start From For Proceeding Queries)
      let lastVisible = documentData[documentData.length - 1].id;
      // Set State
      setFriends(documentData);
      setLastVisible(lastVisible);
      setLoading(false);
    } catch (error) {
      // console.log(error);
    }
  };

  // Retrieve More
  retrieveMore = async (user_id) => {
    try {
      // Set State: Refreshing
      setRefreshing(true);
      // console.log("Retrieving additional Data");
      // Cloud Firestore: Query (Additional Query)
      let additionalQuery = await firebase.db
        .collection("users")
        .doc(user_id)
        .collection("friends")
        .where("id", "<=", 16)
        .orderBy("id")
        .startAfter(lastVisibleState)
        .limit(limit);
      // Cloud Firestore: Query Snapshot
      let documentSnapshots = await additionalQuery.get();
      // Cloud Firestore: Document Data
      let documentData = documentSnapshots.docs.map((document) =>
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
      // console.log(error);
    }
  };

  return (
    <Provider
      value={{
        friends,
        loading,
        refreshing,
        retrieveData,
        retrieveMore,
      }}
    >
      {props.children}
    </Provider>
  );
};

export { FriendsProvider, FriendsContext };
