import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/Firebase";

import { UserContext } from "./UserContext";

const moment = require("moment");

const RequestsContext = React.createContext();
const { Provider } = RequestsContext;

const RequestsProvider = (props) => {
  const {
    currentUserId,
    currentUserData,
    currentUserRequests,
    setCurrentUserRequests,
    isLoading,
    setIsLoading,
  } = useContext(UserContext);

  useEffect(() => {
    !isLoading ? loadRequests() : null;
  }, [currentUserData, isLoading]);

  useEffect(
    () =>
      currentUserData.username !== undefined
        ? setIsLoading(false)
        : setIsLoading(true),
    [currentUserData]
  );

  async function loadRequests() {
    let request_users =
      currentUserData.requests.length > 0 ? await loadUserRequest() : [];
    let requested_users =
      currentUserData.requests_sent.length > 0 ? await loadUserRequested() : [];
    return setCurrentUserRequests({
      request_users: request_users,
      requested_users: requested_users,
    });
  }

  async function loadUserRequest() {
    // console.log("loading requests_users");
    let requests_date = currentUserData.requests.map((item) => item.create_at);
    let requests_users = await firebase.db
      .collection("users")
      .where(
        "user_id",
        "in",
        currentUserData.requests.map((item) => item.user_id)
      )
      .get();
    return requests_users.docs.map((doc, i) => ({
      ...doc.data(),
      ...{ request_date: requests_date[i] },
    }));
  }

  async function loadUserRequested() {
    // console.log("loading requests_sent_users");
    let requests_sent_date = currentUserData.requests_sent.map(
      (item) => item.create_at
    );
    let requests_sent_users = await firebase.db
      .collection("users")
      .where(
        "user_id",
        "in",
        currentUserData.requests_sent.map((item) => item.user_id)
      )
      .get();
    return requests_sent_users.docs.map((doc, i) => ({
      ...doc.data(),
      ...{ request_date: requests_sent_date[i] },
    }));
  }

  // async function sentRequest() {}

  async function sendRequest(user_to_send_to) {
    // Send request to the futur friend:
    await firebase.db
      .collection("users")
      .doc(user_to_send_to.user_id)
      .update({
        requests: user_to_send_to.requests.concat({
          user_id: currentUserId,
          create_at: moment().format(),
        }),
      });
    sendRequestPushNotification(user_to_send_to);
    // Send request to the current user:
    firebase.db
      .collection("users")
      .doc(currentUserId)
      .update({
        requests_sent: currentUserData.requests_sent.concat({
          user_id: user_to_send_to.user_id,
          create_at: moment().format(),
        }),
      });
  }

  async function sendRequestPushNotification(user_to_send_to) {
    const message = {
      to: user_to_send_to.expoPushToken,
      sound: "default",
      title: `Hey 🥳 ${user_to_send_to.username}`,
      body: `${currentUserData.username} wants to be your friend !`,
      data: {
        type: "friend request",
        redirect: true,
        routeName: "Account",
      },
      _displayInForeground: true,
    };
    const response = await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }

  async function acceptRequest(user_who_request) {
    // console.log(currentUserRequests.request_users, user_who_request.id);
    addFriend(user_who_request);
    deleteRequest(currentUserData, user_who_request);
    deleteSentRequest(user_who_request, currentUserData);
  }

  async function addFriend(user_who_request) {
    // add to new friend current user:
    await firebase.db
      .collection("users")
      .doc(currentUserId)
      .update({
        friends_id: currentUserData.friends_id.concat(user_who_request.user_id),
      });
    firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection("friends")
      .doc(user_who_request.user_id)
      .set({
        id: user_who_request.friends_id.length + 1,
        user_id: user_who_request.user_id,
        username: user_who_request.username,
        bio: user_who_request.bio,
        avatar: user_who_request.avatar,
      });
    // add to current user new friend
    await firebase.db
      .collection("users")
      .doc(user_who_request.user_id)
      .update({
        friends_id: user_who_request.friends_id.concat(currentUserId),
      });

    firebase.db
      .collection("users")
      .doc(user_who_request.user_id)
      .collection("friends")
      .doc(currentUserId)
      .set({
        id: currentUserData.friends_id.length + 1,
        user_id: currentUserId,
        username: currentUserData.username,
        bio: currentUserData.bio,
        avatar: currentUserData.avatar,
      });
  }

  declineRequest = (user_who_request) => {
    deleteRequest(currentUserData, user_who_request);
    deleteSentRequest(user_who_request, currentUserData);
  };

  cancelRequest = (user_who_request) => {
    deleteRequest(user_who_request, currentUserData);
    deleteSentRequest(currentUserData, user_who_request);
  };

  deleteRequest = (user, user_to_delete) => {
    firebase.db
      .collection("users")
      .doc(user.user_id)
      .update({
        requests: user.requests.filter(
          (obj) => obj.user_id !== user_to_delete.user_id
        ),
      });
  };

  deleteSentRequest = (user, user_to_delete) => {
    firebase.db
      .collection("users")
      .doc(user.user_id)
      .update({
        requests_sent: user.requests_sent.filter(
          (obj) => obj.user_id !== user_to_delete.user_id
        ),
      });
  };

  return (
    <Provider
      value={{
        loadRequests,
        sendRequest,
        acceptRequest,
        declineRequest,
        cancelRequest,
      }}
    >
      {props.children}
    </Provider>
  );
};

export { RequestsProvider, RequestsContext };
