import React from "react";

import { AppProvider } from "./AppContext";
import { UserProvider } from "./UserContext";
import { LocationProvider } from "./LocationContext";
import { FeedProvider } from "./FeedContext";
import { CreatePartyProvider } from "./CreatePartyContext";
import { PartyProvider } from "./PartyContext";
import { FriendsProvider } from "./FriendsContext";
import { PushNotificationsProvider } from "./PushNotificationsContext";

const AllContextsProvider = props => {
  return (
    <AppProvider>
      <UserProvider>
        <LocationProvider>
          <PushNotificationsProvider>
            <FriendsProvider>
              <PartyProvider>
                <CreatePartyProvider>
                  <FeedProvider>{props.children}</FeedProvider>
                </CreatePartyProvider>
              </PartyProvider>
            </FriendsProvider>
          </PushNotificationsProvider>
        </LocationProvider>
      </UserProvider>
    </AppProvider>
  );
};

export default AllContextsProvider;
