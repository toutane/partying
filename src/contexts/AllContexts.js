import React from "react";

import { UserProvider } from "./UserContext";
import { ThemeProvider } from "./ThemeContext";

const AllContextsProvider = props => {
  return (
    <UserProvider>
      {/* <ThemeProvider>{props.children}</ThemeProvider> */}
      {props.children}
    </UserProvider>
  );
};

export default AllContextsProvider;
