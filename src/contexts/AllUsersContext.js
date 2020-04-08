import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import firebase from "../firebase/Firebase";

const AllUsersContext = React.createContext();
const { Provider } = AllUsersContext;

const AllUsersProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [limit, setLimit] = useState(13);
  const [lastVisibleState, setLastVisible] = useState(null);
  const [loadingState, setLoadingState] = useState(false);
  const [refreshingState, setRefreshingState] = useState(false);

  useEffect(() => {
    searchValue !== "" && retrieveUsersData(searchValue);
    // console.log(searchValue.slice(1, 2));
  }, [searchValue]);

  // useEffect(() => console.log(loadingState), [loadingState]);

  retrieveUsersData = async (value) => {
    try {
      // Set State: LoadingState
      setLoadingState(true);
      // console.log("Retrieving Users Data");
      // Cloud Firestore: Query
      let initialQuery = await firebase.db
        .collection("users")
        .where("username", ">=", value);
      // .where("username", "<=", value.slice(1, 2));
      // .get();

      // console.log(initialQuery.docs.map((document) => document.data()));
      //   .limit(limit);
      // // Cloud F irestore: Query Snapshot
      let documentSnapshots = await initialQuery.get();
      // // Cloud Firestore: Document Data
      let documentData = documentSnapshots.docs.map((document) =>
        document.data()
      );
      // // Cloud Firestore: Last Visible Document (Document ID To Start From For Proceeding Queries)
      // let lastVisible = documentData[documentData.length - 1].user_id;
      // // Set State
      setUsers(documentData);
      // setLastVisible(lastVisible);
      setLoadingState(false);
    } catch (error) {
      // console.log(error);
    }
  };

  // Retrieve More
  retrieveUsersMore = async (user_id) => {
    try {
      // Set State: RefreshingState
      setRefreshingState(true);
      // console.log("Retrieving additional Data");
      // Cloud Firestore: Query (Additional Query)
      let additionalQuery = await firebase.db
        .collection("users")
        .where("username", ">=", "vi")
        .where("username", "<=", "vi")
        .startAfter(lastVisibleState)
        .limit(limit);
      // Cloud Firestore: Query Snapshot
      let documentSnapshots = await additionalQuery.get();
      // Cloud Firestore: Document Data
      let documentData = documentSnapshots.docs.map((document) =>
        document.data()
      );
      // Cloud Firestore: Last Visible Document (Document ID To Start From For Proceeding Queries)
      let lastVisible = documentData[documentData.length - 1].user_id;
      // Set State
      setUsers([...users, ...documentData]);
      setLastVisible(lastVisible);
      setRefreshingState(false);
      //
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <Provider
      value={{
        users,
        setSearchValue,
        loadingState,
        refreshingState,
        retrieveUsersData,
        retrieveUsersMore,
      }}
    >
      {props.children}
    </Provider>
  );
};

export { AllUsersProvider, AllUsersContext };
