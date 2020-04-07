import React from "react";

import { AppProvider } from "./AppContext";
import { UserProvider } from "./UserContext";
import { LocationProvider } from "./LocationContext";
import { FeedProvider } from "./FeedContext";
import { CreatePartyProvider } from "./CreatePartyContext";
import { PartyProvider } from "./PartyContext";
import { FriendsProvider } from "./FriendsContext";
import { PushNotificationsProvider } from "./PushNotificationsContext";
import { GuestsProvider } from "./GuestsContext";

const AllContextsProvider = (props) => {
  return (
    <AppProvider>
      <UserProvider>
        <LocationProvider>
          <PushNotificationsProvider>
            <FriendsProvider>
              <PartyProvider>
                <CreatePartyProvider>
                  <GuestsProvider>
                    <FeedProvider>{props.children}</FeedProvider>
                  </GuestsProvider>
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
