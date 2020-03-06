import React from "react";

import { UserProvider } from "./UserContext";
import { FeedProvider } from "./FeedContext";

const AllContextsProvider = props => {
  return (
    <UserProvider>
      <FeedProvider>{props.children}</FeedProvider>
    </UserProvider>
  );
};

export default AllContextsProvider;
