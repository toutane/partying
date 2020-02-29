import React from "react";

import { UserProvider } from "./UserContext";

const AllContextsProvider = props => {
  return <UserProvider>{props.children}</UserProvider>;
};

export default AllContextsProvider;
