import React from "react";

import { UserProvider } from "./UserContext";
import { FeedProvider } from "./FeedContext";
import { CreatePartyProvider } from "./CreatePartyContext";
import { PartyProvider } from "./PartyContext";
import { FriendsProvider } from "./FriendsContext";

const AllContextsProvider = props => {
  return (
    <UserProvider>
      <FriendsProvider>
        <PartyProvider>
          <CreatePartyProvider>
            <FeedProvider>{props.children}</FeedProvider>
          </CreatePartyProvider>
        </PartyProvider>
      </FriendsProvider>
    </UserProvider>
  );
};

export default AllContextsProvider;
