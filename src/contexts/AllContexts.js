import React from "react";

import { UserProvider } from "./UserContext";
import { FeedProvider } from "./FeedContext";
import { CreatePartyProvider } from "./CreatePartyContext";

const AllContextsProvider = props => {
  return (
    <UserProvider>
      <CreatePartyProvider>
        <FeedProvider>{props.children}</FeedProvider>
      </CreatePartyProvider>
    </UserProvider>
  );
};

export default AllContextsProvider;
