import React from "react";

import { UserProvider } from "./UserContext";
import { FeedProvider } from "./FeedContext";
import { CreatePartyProvider } from "./CreatePartyContext";
import { PartyProvider } from "./PartyContext";
import { FriendsProvider } from "./FriendsContext";
import { PushNotificationsProvider } from "./PushNotificationsContext";

const AllContextsProvider = props => {
  return (
    <UserProvider>
      <PushNotificationsProvider>
        <FriendsProvider>
          <PartyProvider>
            <CreatePartyProvider>
              <FeedProvider>{props.children}</FeedProvider>
            </CreatePartyProvider>
          </PartyProvider>
        </FriendsProvider>
      </PushNotificationsProvider>
    </UserProvider>
  );
};

export default AllContextsProvider;
